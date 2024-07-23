import { DOMAIN } from '@/app/_constants/domain';
import { getSession } from '@/app/_store/cookie/session';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

const API_BASE_URL = DOMAIN ?? '';

const makeHeader = async (body: any) => {
  const accessToken = await getSession('AccessToken');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  if (body instanceof FormData) {
    return { headers: { Authorization: `Bearer ${accessToken}` }, body };
  }

  return { headers, body: body ? JSON.stringify(body) : undefined };
};

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () => {
      const [url, init] = params;
      const { headers, body } = await makeHeader(init?.body);
      const fullInit = { ...init, headers, body };
      const response = await fetch(API_BASE_URL + url, fullInit);
      return response.json();
    };
    return await wrappedFetch();
  } catch (e) {
    console.error(e);
  }
};

export const getData: ApiHandler = async ({ path, queryKey, revalidate, ...init }) => {
  try {
    return await fetchJSON(path, { ...init, next: { revalidate, tags: queryKey } });
  } catch (e) {
    console.error(e);
  }
};

export const postData: ApiHandler = async ({ path, body, ...init }) => {
  try {
    return await fetchJSON(path, {
      ...init,
      method: 'POST',
      body,
    });
  } catch (e) {
    console.error(e);
  }
};

export const putData: ApiHandler = async ({ path, body, ...init }) => {
  try {
    return await fetchJSON(path, {
      ...init,
      method: 'PUT',
      body,
    });
  } catch (e) {
    console.error(e);
  }
};

export const deleteData: ApiHandler = async ({ path, body }) => {
  try {
    return await fetchJSON(path, {
      method: 'DELETE',
      body,
    });
  } catch (e) {
    console.error(e);
  }
};
