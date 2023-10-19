import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { projects } from '@/helpers/data';

const WorkMobile = () => {
  return (
    <section className='pt-24 overflow-x-clip'>
      <h2 className='text-6xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
        Work
      </h2>

      <div className='flex flex-col items-center justify-center pt-10'>
        <div className='relative'>
          <Image
            className='p-10 shadow-md pointer-events-none bg-slate-50 rounded-xl dark:bg-slate-100'
            src={projects[0].image}
            alt='Project 1 image'
            width={260}
            height={200}
            loading='eager'
          />
          <div className='z-[-1] absolute inset-x-48 inset-y-12 w-[200px] h-[140px] bg-ruddy-blue rounded-2xl -rotate-12 dark:bg-ruddy-blue/70' />
        </div>

        <h3 className='px-24 pt-10 text-4xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
          {projects[0].title}
        </h3>
        <p className='text-xl cursor-default leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'>
          {projects[0].description}
        </p>
        <Link
          className='mt-10'
          href={projects[0].link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Review first project'>
          <Button
            aria-label='Review first project'
            className='px-12 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
            Review
          </Button>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center pt-16'>
        <div className='relative'>
          <Image
            className='shadow-lg pointer-events-none rounded-xl'
            src={projects[1].image}
            alt='Project 2 image'
            width={320}
            height={200}
            loading='eager'
          />
          <div className='z-[-1] absolute -inset-x-36 w-52 h-32 -inset-y-10 bg-ruddy-blue rounded-2xl rotate-12 dark:bg-ruddy-blue/70' />
        </div>
        <h3 className='px-24 pt-10 text-4xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
          {projects[1].title}
        </h3>
        <p className='text-xl cursor-default leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'>
          {projects[1].description}
        </p>
        <Link
          className='mt-10'
          href={projects[1].link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Review second project'>
          <Button
            aria-label='Review second project'
            className='px-12 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
            Review
          </Button>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center pt-16'>
        <div className='relative'>
          <Image
            className='shadow-md pointer-events-none rounded-xl'
            src={projects[2].image}
            alt='Project 3 image'
            width={280}
            height={200}
            loading='eager'
          />
          <div className='z-[-1] absolute inset-x-6 -inset-y-10 w-64 h-40 bg-ruddy-blue rounded-2xl rotate-12 dark:bg-ruddy-blue/70' />
        </div>
        <h3 className='px-24 pt-10 text-4xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
          {projects[2].title}
        </h3>
        <p className='text-xl cursor-default leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'>
          {projects[2].description}
        </p>
        <Link
          className='mt-10'
          href={projects[2].link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Review third project'>
          <Button
            aria-label='Review third project'
            className='px-12 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
            Review
          </Button>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center pt-16'>
        <div className='relative'>
          <Image
            className='shadow-md pointer-events-none rounded-xl'
            src='/Project-4.webp'
            alt='Project 4 image'
            width={320}
            height={300}
            loading='eager'
          />
          <div className='z-[-1] absolute inset-x-20 -inset-y-20 w-[300px] h-[200px] bg-ruddy-blue rounded-2xl rotate-12 dark:bg-ruddy-blue/70' />
        </div>
        <h3 className='px-24 pt-10 text-4xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
          {projects[3].title}
        </h3>
        <p className='text-xl cursor-default leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'>
          {projects[3].description}
        </p>
        <Link
          className='mt-10'
          href={projects[3].link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Repository of fourth project'>
          <Button
            aria-label='Repository of fourth project'
            className='px-8 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
            Repository
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkMobile;
