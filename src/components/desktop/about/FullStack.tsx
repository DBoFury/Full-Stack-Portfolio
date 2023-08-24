'use client';

import { FC } from 'react';

import Link from 'next/link';

import { m } from 'framer-motion';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

import { lineHeightGrowthVariants } from '@/helpers/animations';

import { contacts } from '@/helpers/data';

import { AboutType } from '@/types/data';

interface WebDevelopmentProps {
  about: AboutType;
}

const FullStack: FC<WebDevelopmentProps> = ({ about }) => {
  return (
    <section className='flex flex-col items-center justify-start gap-4 pt-20 cursor-default section'>
      <div className='absolute -inset-x-36 inset-y-44 w-[20rem] h-[32rem] bg-ruddy-blue rounded-2xl rotate-12 dark:bg-ruddy-blue/60' />
      <div className='absolute -right-32 inset-y-80 w-[20rem] h-[36rem] bg-ruddy-blue rounded-2xl rotate-12 dark:bg-ruddy-blue/60' />
      <div className='relative h-[15vh] mt-20 dt:mr-20'>
        <m.div
          className='absolute inset-x-0 w-1 h-0 transition-colors -inset-y-5 bg-onyx dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '15vh', duration: 0.5, delay: 0.3 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />
        <m.span
          className='inset-y-[12.5vh] -inset-x-[0.75rem] w-7 h-7 rounded-full absolute bg-onyx transition-colors dark:bg-slate-200'
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
            delay: 0.7,
          }}
          viewport={{
            once: true,
          }}
        />
      </div>
      <div className='flex flex-col items-center gap-2 dt:mr-20'>
        <m.h3
          className='h-10 text-4xl italic font-medium text-center w-52 text-pine-green'
          initial={{
            opacity: 0,
            y: '-30%',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}>
          {about.title}
        </m.h3>
        <m.p
          className='text-[1.5rem] leading-[150%] pt-3 italic text-center max-w-[44rem] text-onyx transition-colors dark:text-slate-300'
          initial={{
            opacity: 0,
            y: '-10%',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.6,
          }}
          viewport={{
            once: true,
          }}>
          {about.content}
        </m.p>

        <m.div
          className='flex items-center justify-between w-[24rem] pt-5'
          initial={{
            opacity: 0,
            y: '-10%',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2.2,
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
        </m.div>
      </div>
    </section>
  );
};

export default FullStack;
