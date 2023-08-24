'use client';

import { FC } from 'react';

import { m } from 'framer-motion';

import { Icons } from '@/components/Icons';

import { lineHeightGrowthVariants } from '@/helpers/animations';

import { AboutType } from '@/types/data';

interface WebDevelopmentProps {
  about: AboutType;
}

const WebDevelopment: FC<WebDevelopmentProps> = ({ about }) => {
  return (
    <>
      <m.h3
        className='text-4xl italic font-medium text-center transition-colors cursor-default text-onyx dark:text-slate-200'
        initial={{
          opacity: 0,
          y: '-15%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
        viewport={{
          once: true,
        }}>
        {about.title}
      </m.h3>
      <m.div
        className='w-1 bg-onyx dark:bg-slate-200'
        variants={lineHeightGrowthVariants}
        custom={{ lineHeight: '2.5rem', duration: 0.4, delay: 0.8 }}
        whileInView='animate'
        viewport={{
          once: true,
        }}
      />
      <m.p
        className='text-2xl leading-[150%] cursor-default pt-3 italic text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'
        initial={{
          opacity: 0,
          y: '-15%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
        viewport={{
          once: true,
        }}>
        {about.content}
      </m.p>
      <m.div
        className='w-1 bg-onyx dark:bg-slate-200'
        variants={lineHeightGrowthVariants}
        custom={{ lineHeight: '2.5rem', duration: 0.4, delay: 0.8 }}
        whileInView='animate'
        viewport={{
          once: true,
        }}
      />
      <div className='relative flex items-center justify-center space-x-3'>
        <m.span
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 0.8,
          }}
          viewport={{
            once: true,
          }}>
          <Icons.python className='fill-white' />
        </m.span>

        <m.span
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            rotate: '360deg',
          }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 0.8,
          }}
          viewport={{
            once: true,
          }}>
          <Icons.plus className='stroke-onyx dark:stroke-slate-300' size={60} />
        </m.span>

        <m.div
          className='flex items-center justify-center space-x-2'
          initial={{
            opacity: 0,
            y: '10%',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          viewport={{
            once: true,
          }}>
          <Icons.django className='dark:fill-slate-300' />
          <p className='text-4xl font-semibold text-onyx dark:text-slate-300'>
            /
          </p>
          <Icons.flask className='dark:fill-slate-300' />
        </m.div>
        <m.div
          className='z-[-1] absolute -inset-x-24 -inset-y-[6rem] w-[150px] h-[200px] bg-ruddy-blue rounded-2xl dark:bg-ruddy-blue/60'
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            rotate: '-80deg',
          }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}
        />
      </div>
    </>
  );
};

export default WebDevelopment;
