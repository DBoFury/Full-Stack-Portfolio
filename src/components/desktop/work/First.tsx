import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const First = () => {
  return (
    <div
      id='work'
      className='flex flex-col items-center justify-start px-10 pt-20 space-y-20 section'>
      <div className='absolute z-[-1] -inset-x-44 inset-y-96 w-72 h-96 bg-ruddy-blue rounded-2xl -rotate-12' />

      <div className='flex items-center justify-center space-x-20 dt:space-x-32'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <h2 className='text-[1.6rem] font-semibold text-pine-green dt:text-[2.8rem] cursor-default'>
              Frontend Mentor Challenges
            </h2>
            <Link
              href='https://olacdy.github.io/frontend-mentor-challenges/'
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
          <p className='text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem] cursor-default'>
            A collection of Frontend Mentor tasks I've solved and deployed on
            GitHub Pages. Utilizing the Next router, I've harmoniously
            integrated all pages into one cohesive website, dedicating a unique
            page to each solution. Dive into this exhibit of my technical skills
            and creative design.
          </p>
        </div>
        <div className='relative'>
          <Image
            className='p-10 shadow-lg pointer-events-none bg-gray-50 rounded-xl'
            src='/Project-1.webp'
            alt='Project 1 image'
            width={300}
            height={200}
            loading='eager'
          />
          <div className='absolute z-[-1] inset-y-10 -right-24 w-48 h-40 bg-ruddy-blue rounded-2xl -rotate-12' />
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 dt:space-x-20'>
        <div className='relative'>
          <Image
            className='pointer-events-none'
            src='/Project-2.webp'
            alt='Project 2 image'
            width={460}
            height={300}
            loading='eager'
          />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='flex items-center justify-center space-x-10'>
            <Link
              href='https://interactive-comments-section-mocha.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Review a second project'>
              <Button
                aria-label='Review second project'
                className='text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                Review
              </Button>
            </Link>
            <h2 className='text-[1.6rem] dt:text-[2.5rem] font-semibold text-pine-green cursor-default'>
              Interactive Comments Section
            </h2>
          </div>
          <p className='text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem] cursor-default'>
            All-encompassing full-stack web application empowering users to
            create, edit, and delete diverse comments within a unified global
            comments section. Account creation is a prerequisite for accessing
            this feature-rich platform. Originally initiated as a Frontend
            Mentor task, I expanded its scope to develop a comprehensive web
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
