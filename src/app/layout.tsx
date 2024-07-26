import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const NotoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400'] });

const APP_NAME = 'WOORY';
const APP_DEFAULT_TITLE = 'WOORY | 우리';
const APP_TITLE_TEMPLATE = '%s | 우리';
const APP_DESCRIPTION = '우리 가족끼리 나누는 일상, 우리. 매일 다른 주제로 재미있고 간단하게 일상을 공유해보세요!';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    type: 'website',
    images: {
      url: '/opengraph-image.png',
      width: 800,
      height: 400,
    },
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        {children}
        <Toaster
          toastOptions={{
            duration: 1500,
            position: 'bottom-center',
          }}
          containerStyle={{
            bottom: '12.8rem',
          }}
        />
      </body>
    </html>
  );
}
