import { Cookies } from 'react-cookie';

export const cookies = new Cookies();

export const setCookies: typeof cookies.set = (name, value, options) => cookies.set(name, value, { ...options });

export const getCookies: typeof cookies.get = (name: string) => cookies.get(name);

export const deleteCookies: typeof cookies.remove = (name, options) => cookies.remove(name, options);
