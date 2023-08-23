'use client';

import { motion } from 'framer-motion';

import { lineHeightGrowthVariants } from '@/helpers/animations';

const DataScience = () => {
  return (
    <>
      <motion.h3
        className='text-4xl italic font-medium text-center text-onyx'
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
        Data Science
      </motion.h3>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex flex-col items-center'>
          <motion.span
            className='w-6 h-6 mt-10 rounded-full bg-onyx'
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
          <motion.div
            className='w-1 bg-onyx'
            variants={lineHeightGrowthVariants}
            custom={{ lineHeight: '2.5vh', duration: 0.4, delay: 0.8 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
        </div>

        <div className='relative'>
          <motion.img
            className='p-6 ml-12 rounded-lg shadow-md bg-slate-50'
            src='/DS.webp'
            alt='Data Science Illustration'
            width={380}
            height={320}
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
          <motion.div
            className='z-[-1] absolute inset-x-40 -inset-y-0 w-[320px] h-[320px] rounded-2xl bg-ruddy-blue'
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
        <motion.div
          className='w-1 bg-onyx'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '2.5rem', duration: 0.4, delay: 0.8 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <motion.p
          className='text-2xl leading-[150%] italic text-center max-w-[340px] text-onyx'
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
          My expedition as a software developer commenced with the elegant
          language of Python. This initial foray into the realm of Data Science
          set the foundation for my evolving voyage.
        </motion.p>
        <motion.div
          className='w-1 bg-onyx'
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
