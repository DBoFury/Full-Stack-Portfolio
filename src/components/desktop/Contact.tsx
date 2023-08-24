import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { contacts } from '@/helpers/data';

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-start section overflow-clip'>
      <div className='z-[-1] absolute top-20 -left-56 w-[22rem] h-[22rem] bg-ruddy-blue rounded-2xl rotate-45 dark:bg-ruddy-blue/60' />
      <div className='z-[-1] absolute -bottom-80 -right-20 w-[32rem] h-[32rem] bg-ruddy-blue rounded-2xl rotate-12 dt:right-0 dark:bg-ruddy-blue/60' />

      <h2 className='absolute text-6xl font-bold cursor-default top-36 dt:top-44 text-pine-green'>
        Contact Me
      </h2>
      <div className='flex flex-col items-start justify-center flex-1 pt-20 space-y-8 dt:space-x-12 dt:flex-row dt:space-y-0 dt:pt-0 dt:items-center'>
        {contacts.slice(2).map((contact) => {
          const Icon = Icons[contact.icon as keyof typeof Icons];

          return (
            <Link
              key={contact.name.toLowerCase()}
              className='flex items-center justify-center space-x-6 group'
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={contact.ariaLabel}>
              <Icon className='w-32 h-32 transition-all ease-out group-hover:-translate-y-6 dark:fill-slate-200' />
              <span className='font-semibold transition-colors text-7xl text-onyx dark:text-slate-300'>
                {contact.name}
              </span>
            </Link>
          );
        })}
      </div>

      <small className='absolute text-xs font-semibold text-center -translate-x-1/2 cursor-default bottom-2 left-1/2 text-battleship-gray'>
        &copy; 2023 Oleg Didechkin. All rights reserved.
      </small>
    </div>
  );
};

export default Contact;
