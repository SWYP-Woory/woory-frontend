import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('AccessToken');
  if (!accessToken) {
    return NextResponse.rewrite(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/family',
    '/family-select',
    '/family-edit',
    '/family-delete',
    '/notification',
    '/home/:path*',
    '/posts/:path*',
    '/favorites',
    '/members',
    '/mypage/:path*',
  ],
};
