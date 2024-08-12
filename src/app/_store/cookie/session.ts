'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

interface Args extends ResponseCookie {
  value: any;
}

const setSession = async ({ ...args }: Args) => {
  const { path, value, maxAge, httpOnly, secure, sameSite } = args;
  const cookieStore = cookies();
  cookieStore.set(args.name, typeof value === 'string' ? value : JSON.stringify(value), {
    maxAge: maxAge ?? 60 * 60 * 24 * 365,
    httpOnly,
    secure,
    sameSite,
    path,
  });
};

export const setToken = async (accessToken: string) => {
  await setSession({
    name: 'AccessToken',
    value: accessToken,
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
};

export const getSession = async (key: string) => {
  const cookieStore = cookies();
  const value = cookieStore.get(key)?.value;
  if (!value) {
    return null;
  }
  return value[0] === '{' ? JSON.parse(value) : value;
};

const deleteSession = async (key: string) => {
  cookies().delete(key);
};

export const logout = async () => {
  await deleteSession('AccessToken');
};
