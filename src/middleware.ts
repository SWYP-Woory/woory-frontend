import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  if (!accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    'family',
    'family-select',
    '/notification',
    '/home/:path*',
    '/posts/:path*',
    '/favorites',
    '/members',
    '/mypage/:path*',
  ],
};
