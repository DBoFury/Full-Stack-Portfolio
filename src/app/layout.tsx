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
  metadataBase: new URL('https://olegdidechkin.com'),
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
