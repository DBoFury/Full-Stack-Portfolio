import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/data';

interface FirstWorkSectionProps {
  projects: ProjectType[];
}

const FirstWorkSection: FC<FirstWorkSectionProps> = ({ projects }) => {
  return (
    <section
      id='work'
      className='flex flex-col items-center justify-start px-10 pt-20 space-y-20 section'>
      <div className='absolute z-[-1] -inset-x-44 inset-y-96 w-72 h-96 bg-ruddy-blue rounded-2xl -rotate-12 dark:bg-ruddy-blue/60' />

      <div className='flex items-center justify-center space-x-20 dt:space-x-32'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <h2 className='text-3xl font-semibold cursor-default text-pine-green dt:text-5xl dark:drop-shadow-sm'>
              {projects[0]['title']}
            </h2>
            <Link
              href={projects[0]['link']}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Review a first project'>
              <Button
                aria-label='Review first project'
                className='text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                Review
              </Button>
            </Link>
          </div>
          <p className='text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem] cursor-default transition-colors dark:text-slate-300'>
            {projects[0]['description']}
          </p>
        </div>
        <div className='relative'>
          <Image
            className='p-10 shadow-lg pointer-events-none bg-slate-50 rounded-xl'
            src={projects[0]['image']}
            alt='Project 1 image'
            width={300}
            height={200}
            loading='eager'
          />
          <div className='absolute z-[-1] inset-y-10 -right-24 w-48 h-40 bg-ruddy-blue rounded-2xl -rotate-12 dark:bg-ruddy-blue/60' />
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 dt:space-x-20'>
        <div className='relative'>
          <Image
            className='shadow-lg pointer-events-none rounded-xl'
            src={projects[1]['image']}
            alt='Project 2 image'
            width={460}
            height={300}
            loading='eager'
          />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <Link
              href={projects[1]['link']}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Review a second project'>
              <Button
                aria-label='Review second project'
                className='text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                Review
              </Button>
            </Link>
            <h2 className='text-3xl font-semibold cursor-default dt:text-5xl text-pine-green dark:drop-shadow-sm'>
              {projects[1]['title']}
            </h2>
          </div>
          <p className='text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem] cursor-default transition-colors dark:text-slate-300'>
            {projects[1]['description']}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstWorkSection;
