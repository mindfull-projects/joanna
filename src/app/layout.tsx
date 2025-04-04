import type { Metadata } from 'next';
import HeaderLayout from './header-layout';

import './globals.css';

export const metadata: Metadata = {
  title: 'Joanna',
  description: 'Joanna personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <HeaderLayout />
        <main className='pt-[80px]'>{children}</main>
      </body>
    </html>
  );
}
