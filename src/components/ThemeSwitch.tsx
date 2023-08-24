'use client';

import { useTheme } from '@/context/theme-context';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className='fixed p-0 bottom-5 right-5 bg-white w-[3.5rem] h-[3.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-slate-400 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-900 lg:w-[5rem] lg:h-[5rem] hover:bg-current dark:hover:bg-current'
      onClick={toggleTheme}
      aria-label='Toggle dark and light mode'>
      {theme === 'light' ? (
        <Icons.sun className='stroke-onyx w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]' />
      ) : (
        <Icons.moon className='stroke-white w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]' />
      )}
    </Button>
  );
}
