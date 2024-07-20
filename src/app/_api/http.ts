export type HttpResponse<T extends object> = {
  data: T;
  config: RequestInit;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: ResponseType;
  url: string;
};

type Interceptor = {
  onRequest: (config: RequestInit) => RequestInit;
  onResponse: <T extends object>(response: HttpResponse<T>) => HttpResponse<T> | PromiseLike<HttpResponse<T>>;
  onRequestError: (reason: unknown) => Promise<never>;
  onResponseError: (reason: unknown) => Promise<never>;
};

const processHttpResponse = async <T extends object>(response: Response, config: RequestInit) => {
  const data = (await response.json().catch(() => ({}))) as T;
  const { headers, ok, redirected, status, statusText, type, url } = response;
  return { data, config, headers, ok, redirected, status, statusText, type, url };
};

export default class Http {
  private readonly baseUrl: string;

  private readonly defaultConfig: RequestInit;

  private interceptor: Interceptor;

  constructor(baseUrl = '', defaultConfig: RequestInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultConfig = defaultConfig;
    this.interceptor = {
      onRequest: (config) => config,
      onResponse: (response) => response,
      onRequestError: (reason) => Promise.reject(reason),
      onResponseError: (reason) => Promise.reject(reason),
    };
  }

  registerInterceptor(interceptor: Interceptor) {
    this.interceptor = {
      ...this.interceptor,
      ...interceptor,
    };
  }

  request<T extends object>(url: string, config: RequestInit) {
    let requestUrl = '';
    if (!url.startsWith('http')) {
      requestUrl = `${this.baseUrl}${url}`;
    }

    const requestConfig = { ...this.defaultConfig, ...this.interceptor.onRequest(config) };
    requestConfig.headers = { ...this.defaultConfig.headers, ...config.headers };

    try {
      return fetch(requestUrl, requestConfig)
        .then((response) => processHttpResponse<T>(response, requestConfig))
        .then(this.interceptor.onResponse)
        .catch(this.interceptor.onResponseError);
    } catch (error) {
      return this.interceptor.onRequestError(error);
    }
  }

  get<T extends object>(url: string, config: RequestInit) {
    return this.request<T>(url, {
      ...config,
      method: 'GET',
    });
  }

  post<T extends object>(url: string, config: RequestInit) {
    return this.request<T>(url, {
      ...config,
      method: 'POST',
    });
  }

  put<T extends object>(url: string, config: RequestInit) {
    return this.request<T>(url, {
      ...config,
      method: 'PUT',
    });
  }

  patch<T extends object>(url: string, config: RequestInit = {}) {
    return this.request<T>(url, {
      ...config,
      method: 'PATCH',
    });
  }

  delete<T extends object>(url: string, config: RequestInit = {}) {
    return this.request<T>(url, {
      ...config,
      method: 'DELETE',
    });
  }
}
