'use client';

import { FC, MutableRefObject } from 'react';

import Link from 'next/link';

interface HeaderProps {
  chunkRef: MutableRefObject<number>;
}

const Header: FC<HeaderProps> = ({ chunkRef }) => {
  return (
    <header className='sticky top-0 z-10 w-full h-0 bg-white'>
      <nav className='flex items-end justify-between p-3 px-10'>
        <Link href='/' className='w-fit'>
          <h1 className='text-5xl font-medium uppercase w-fit text-pine-green'>
            Oleg D.
          </h1>
        </Link>
        <ul className='flex mr-6 space-x-5 text-2xl text-pine-green'>
          <li>
            <Link
              href='#home'
              onClick={() => (chunkRef.current = 0)}
              aria-label='Go to a home section'>
              <p className='relative group'>
                <span>Home</span>
                <span className='absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all'></span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              href='#about'
              onClick={() => (chunkRef.current = 1)}
              aria-label='Go to an about section'>
              <p className='relative group'>
                <span>About</span>
                <span className='absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all'></span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              href='#work'
              onClick={() => (chunkRef.current = 4)}
              aria-label='Go to a work section'>
              <p className='relative group'>
                <span>Work</span>
                <span className='absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all'></span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              href='#contact'
              onClick={() => (chunkRef.current = 6)}
              aria-label='Go to a contact section'>
              <p className='relative group'>
                <span>Contact</span>
                <span className='absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all'></span>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
