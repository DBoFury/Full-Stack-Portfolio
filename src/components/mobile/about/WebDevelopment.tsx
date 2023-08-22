'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/Icons';

import { lineHeightGrowthVariants } from '@/helpers/animations';

const WebDevelopment = () => {
  return (
    <>
      <motion.h3
        className='text-4xl italic font-medium text-center text-onyx'
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
        Web-development
      </motion.h3>
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
        className='text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx'
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
        Transitioning, I immersed myself in web development, powered by Python.
        Guided by Django and Flask frameworks, I sculpted web applications,
        combining functionality and aesthetics seamlessly.
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
      <div className='relative flex items-center justify-center mr-10 space-x-3 rounded-lg shadow-sm'>
        <motion.span
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
        </motion.span>

        <motion.span
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
          <Icons.plus stroke='#424241' size={60} />
        </motion.span>

        <motion.div
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
          <Icons.django />
          <p className='text-4xl font-semibold text-onyx'>/</p>
          <Icons.flask />
        </motion.div>
        <motion.div
          className='z-[-1] absolute -inset-x-24 -inset-y-[6rem] w-[150px] h-[200px] bg-ruddy-blue rounded-2xl'
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
