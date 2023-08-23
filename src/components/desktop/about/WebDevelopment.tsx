'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/Icons';

import {
  lineHeightGrowthVariants,
  lineWidthGrowthVariants,
} from '@/helpers/animations';

const WebDevelopment = () => {
  return (
    <section className='flex flex-col items-center justify-center cursor-default section'>
      <div className='absolute -inset-x-52 inset-y-40 w-72 h-[32rem] bg-ruddy-blue rounded-2xl -rotate-12 dark:bg-ruddy-blue/60' />
      <div className='relative h-[40vh] dt:mr-20'>
        <motion.div
          className='absolute w-1 -mt-[15vh] bg-onyx transition-colors dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '15vh', duration: 0.5, delay: 0.7 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <motion.span
          className='inset-y-0 -inset-x-[0.75rem] w-7 h-7 rounded-full absolute bg-onyx transition-colors dark:bg-slate-200'
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
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        />

        <motion.h3
          className='absolute h-10 text-4xl italic font-medium text-center w-80 inset-x-6 -inset-y-10 text-pine-green'
          initial={{
            opacity: 0,
            x: '-10%',
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: 'tween',
            duration: 0.7,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}>
          Web Development
        </motion.h3>

        <motion.div
          className='absolute w-1 transition-colors bg-onyx dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '57vh', duration: 0.8, delay: 1.4 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <div className='absolute inset-y-20 -inset-x-[25.5rem] w-[20rem] h-[22rem] dt:w-[22rem] dt:-inset-x-[29.5rem]'>
          <motion.div
            className='absolute h-px top-44 -right-[4.5rem] bg-battleship-gray dt:-right-[5.5rem] transition-colors dark:bg-slate-200'
            variants={lineWidthGrowthVariants}
            custom={{ lineWidth: '40px', delay: 2 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
          <motion.p
            className='text-[1.6rem] leading-[150%] pt-3 italic text-center text-onyx transition-colors dark:text-slate-300'
            initial={{
              opacity: 0,
              x: '15%',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: 'spring',
              duration: 1.4,
              delay: 2.3,
            }}
            viewport={{
              once: true,
            }}>
            Transitioning, I immersed myself in web development, powered by
            Python. Guided by Django and Flask frameworks, I sculpted web
            applications, combining functionality and aesthetics seamlessly.
          </motion.p>
        </div>
        <div className='absolute inset-y-80 inset-x-[5.5rem] w-[26rem] h-36'>
          <motion.div
            className='absolute h-px top-16 -left-[3.5rem] bg-battleship-gray transition-colors dark:text-slate-300'
            variants={lineWidthGrowthVariants}
            custom={{ lineWidth: '40px', delay: 3 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
          <div className='relative flex items-center justify-center p-5 mt-5 space-x-3'>
            <motion.div
              className='flex items-center justify-center gap-3'
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 0,
                delay: 3,
              }}
              viewport={{
                once: true,
              }}>
              <Icons.python className='fill-white' />
              <Icons.plus stroke='#FFFFFF' size={60} />
            </motion.div>
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
                delay: 3.4,
              }}
              viewport={{
                once: true,
              }}>
              <Icons.django className='dark:fill-slate-300' />
              <p className='text-4xl font-semibold transition-colors text-onyx dark:text-slate-300'>
                /
              </p>
              <Icons.flask className='dark:fill-slate-300' />
            </motion.div>
            <motion.div
              className='z-[-1] absolute -inset-x-4 -inset-y-0 w-[180px] h-[130px] bg-ruddy-blue rounded-2xl dark:bg-ruddy-blue/80'
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
                rotate: '-168deg',
              }}
              transition={{
                type: 'spring',
                duration: 1,
                delay: 3.5,
              }}
              viewport={{
                once: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
