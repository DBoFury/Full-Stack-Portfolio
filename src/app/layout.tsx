import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

import ThemeSwitch from '@/components/ThemeSwitch';

import './globals.css';

const work_sans = Work_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'leg D.',
  description: 'Personal full-stack portfolio of Didechkin Oleg.',
  referrer: 'origin-when-cross-origin',
  keywords: ['Portfolio', 'Full-Stack', 'Developer'],
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  metadataBase: new URL('https://olegdidechkin.com'),
  twitter: {
    card: 'summary_large_image',
    title: 'Oleg D.',
    description: 'Personal full-stack portfolio',
    creator: '@Olacdy',
    images: {
      url: 'https://olegdidechkin.com/twitter-image.jpg',
      alt: 'Portfolio preview',
    },
  },
  openGraph: {
    title: 'Oleg D.',
    description: 'Personal full-stack portfolio',
    url: 'https://olegdidechkin.com',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://olegdidechkin.com/opengraph-image.jpg',
        width: 1200,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${work_sans.className} bg-white dark:bg-slate-800`}>
        <div className='bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] lg:absolute sm:w-[68.75rem] dark:bg-[#705253]'></div>
        <div className='bg-[#dbd7fb] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] lg:absolute sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5a586b]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
