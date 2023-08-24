'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

import { lineHeightGrowthVariants } from '@/helpers/animations';

import { contacts } from '@/helpers/data';
import { AboutType } from '@/types/data';

interface FullStackProps {
  about: AboutType;
}

const FullStack: FC<FullStackProps> = ({ about }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <motion.div
          className='w-1 bg-onyx dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '8rem', duration: 0.6, delay: 0.8 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <motion.span
          className='w-6 h-6 rounded-full bg-onyx dark:bg-slate-200'
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
            delay: 1.2,
          }}
          viewport={{
            once: true,
          }}
        />
      </div>
      <motion.h3
        className='text-4xl italic font-medium text-center transition-colors text-onyx dark:text-slate-200'
        initial={{
          opacity: 0,
          y: '-30%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          duration: 1,
          delay: 1,
        }}
        viewport={{
          once: true,
        }}>
        {about.title}
      </motion.h3>
      <motion.p
        className='w-[340px] text-2xl leading-[150%] italic text-center text-onyx transition-colors dark:text-slate-200'
        initial={{
          opacity: 0,
          y: '-10%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          duration: 0.8,
          delay: 1,
        }}
        viewport={{
          once: true,
        }}>
        {about.content}
      </motion.p>
      <motion.div
        className='flex flex-col items-center justify-center px-2 space-y-5 mb:flex-row mb:space-y-0 mb:justify-between mb:gap-5 mb:px-0'
        initial={{
          opacity: 0,
          y: '-10%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          duration: 1,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}>
        {contacts.slice(0, 2).map((contact) => {
          const Icon = Icons[contact.icon as keyof typeof Icons];

          return (
            <Link
              key={contact.icon}
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={contact.ariaLabel}>
              <Button
                aria-label={`${contact.name} page`}
                className='flex items-center justify-center px-6 space-x-3 text-2xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white'>
                <Icon />
                <span>{contact.name}</span>
              </Button>
            </Link>
          );
        })}
      </motion.div>
    </>
  );
};

export default FullStack;
