import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/data';

interface SecondWorkSectionProps {
  projects: ProjectType[];
}

const SecondWorkSection: FC<SecondWorkSectionProps> = ({ projects }) => {
  return (
    <section className='flex flex-col items-center justify-start px-10 space-y-24 section pt-44 dt:space-y-12 dt:pt-28'>
      <div className='flex items-center justify-center space-x-20 dt:space-x-32'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <h2 className='text-[1.6rem] font-semibold text-pine-green dt:text-[2.8rem] cursor-default'>
              {projects[0]['title']}
            </h2>
            <Link
              href={projects[0]['link']}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Review a third project'>
              <Button
                aria-label='Review third project'
                className='text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                Preview
              </Button>
            </Link>
          </div>
          <p className='text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem] cursor-default transition-colors dark:text-slate-300'>
            {projects[0]['description']}
          </p>
        </div>
        <div className='relative'>
          <Image
            className='shadow-lg pointer-events-none rounded-xl'
            src={projects[0]['image']}
            alt='Project 3 image'
            width={300}
            height={200}
            loading='eager'
          />
          <div className='absolute z-[-1] inset-y-20 -right-24 w-64 h-64 bg-ruddy-blue rounded-2xl -rotate-12 dark:bg-ruddy-blue/60' />
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 dt:space-x-20'>
        <div className='relative'>
          <Image
            className='rounded-lg pointer-events-none'
            src={projects[1]['image']}
            alt='Project 4 image'
            width={420}
            height={300}
            loading='eager'
          />
          <div className='absolute z-[-1] -inset-y-12 -inset-x-16 w-52 h-52 bg-ruddy-blue rounded-2xl -rotate-[25deg] dark:bg-ruddy-blue/60' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <Link
              href={projects[1]['link']}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Repository of fourth project'>
              <Button
                aria-label='Repository of fourth project'
                className='text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                Repository
              </Button>
            </Link>
            <h2 className='text-[1.6rem] dt:text-[2.5rem] font-semibold text-pine-green cursor-default'>
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

export default SecondWorkSection;
