import { DOMAIN } from '@/app/_constants/domain';

type Fetch = typeof fetch;

interface HandlerParams extends RequestInit {
  path: string;
  body?: any;
  revalidate?: number;
  queryKey?: string[];
}

type ApiHandler = (params: HandlerParams) => Promise<any>;

const API_BASE_URL = DOMAIN ?? '';

const makeHeader = (body: any) => {
  const isFormData = body instanceof FormData;
  if (isFormData) {
    return { body };
  }
  return { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
};

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () =>
      fetch(API_BASE_URL + params[0], { ...params[1], ...(params[1]?.body ? makeHeader(params[1].body) : {}) }).then(
        (resp) => resp.json(),
      );
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
