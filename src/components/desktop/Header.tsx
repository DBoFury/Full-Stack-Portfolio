'use client';

import { FC } from 'react';

import { useActiveSectionContext } from '@/context/active-section-context';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { sections } from '@/helpers/data';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { activeSection, setActiveSection, chunkRef } =
    useActiveSectionContext();

  return (
    <header className='sticky top-0 z-10 w-full h-0 bg-white'>
      <nav className='flex items-end justify-between p-3 px-10'>
        <Link href='/' className='w-fit'>
          <h1 className='text-5xl font-medium uppercase w-fit text-pine-green'>
            Oleg D.
          </h1>
        </Link>
        <ul className='flex gap-8 mr-6 text-2xl text-pine-green'>
          {sections.map((section) => {
            return (
              <li
                className='relative flex items-center justify-center h-3/4'
                key={section.id}>
                <Link
                  className='flex items-center justify-center w-full transition hover:-translate-y-2 dark:text-gray-500 dark:hover:text-gray-300'
                  href={`#${section.id}`}
                  onClick={() => {
                    setActiveSection(section.name);
                    chunkRef.current = section.number;
                  }}>
                  {section.name}

                  {activeSection === section.name && (
                    <motion.span
                      className='absolute left-0 w-full h-1 bg-ruddy-blue -bottom-1 -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}></motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
