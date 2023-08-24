'use client';

import { FC } from 'react';

import { m } from 'framer-motion';

import { lineHeightGrowthVariants } from '@/helpers/animations';

import { AboutType } from '@/types/data';

interface DataScienceProps {
  about: AboutType;
}

const DataScience: FC<DataScienceProps> = ({ about }) => {
  return (
    <>
      <m.h3
        className='text-4xl italic font-medium text-center transition-colors cursor-default text-onyx dark:text-slate-300'
        initial={{
          opacity: 0,
          y: '-10%',
        }}
        whileInView={{
          opacity: 1,
          y: '0%',
        }}
        transition={{
          type: 'tween',
          duration: 0.7,
          delay: 0.4,
        }}
        viewport={{
          once: true,
        }}>
        {about.title}
      </m.h3>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex flex-col items-center'>
          <m.span
            className='w-6 h-6 mt-10 transition-colors rounded-full bg-onyx dark:bg-slate-200'
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              type: 'spring',
              damping: 8,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          />
          <m.div
            className='w-1 transition-colors bg-onyx dark:bg-slate-200'
            variants={lineHeightGrowthVariants}
            custom={{ lineHeight: '2.5vh', duration: 0.4, delay: 0.8 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
        </div>

        <div className='relative'>
          <m.img
            className='p-6 ml-12 rounded-lg shadow-md pointer-events-none bg-slate-50 dark:bg-slate-100'
            src={about.image?.src}
            alt={about.image?.alt}
            width={320}
            height={260}
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
            }}
          />
          <m.div
            className='z-[-1] absolute inset-x-40 -inset-y-3 w-[310px] h-[310px] rounded-2xl bg-ruddy-blue dark:bg-ruddy-blue/60'
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              rotate: '-45deg',
            }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 1.5,
            }}
            viewport={{
              once: true,
            }}
          />
        </div>
        <m.div
          className='w-1 bg-onyx dark:bg-slate-200'
          transition-colors
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '2.5rem', duration: 0.4, delay: 0.8 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <m.p
          className='text-2xl leading-[150%] italic cursor-default text-center max-w-[340px] text-onyx transition-colors dark:text-slate-300'
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
          className='w-1 transition-colors bg-onyx dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '2.5rem', duration: 0.4, delay: 0.8 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
      </div>
    </>
  );
};

export default DataScience;
