import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { contacts } from '@/helpers/data';
import { cn } from '@/lib/utils';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center justify-center section overflow-clip py-44'>
      <div className='z-[-1] absolute top-20 -left-56 w-[22rem] h-[22rem] bg-ruddy-blue rounded-2xl rotate-45 dark:bg-ruddy-blue/60' />
      <div className='z-[-1] absolute -bottom-80 -right-20 w-[32rem] h-[32rem] bg-ruddy-blue rounded-2xl rotate-12 dt:right-0 dark:bg-ruddy-blue/60' />

      <div className='flex flex-col items-center justify-center gap-20'>
        <h2 className='font-bold cursor-default text-7xl text-pine-green dark:drop-shadow-sm dt:text-8xl'>
          Contacts
        </h2>
        <div className='grid flex-1 grid-cols-3 gap-14 justify-items-start'>
          {contacts.slice(2).map((contact, index) => {
            const Icon = Icons[contact.icon as keyof typeof Icons];

            return (
              <Link
                key={contact.name.toLowerCase()}
                className={cn(
                  'flex items-center justify-center space-x-6 group'
                )}
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={contact.ariaLabel}>
                <Icon className='w-16 h-16 transition-all ease-out group-hover:-translate-y-6 dark:fill-slate-200 lg:w-24 lg:h-24 dt:w-28 dt:h-28' />
                <span className='text-3xl font-semibold transition-colors text-onyx dark:text-slate-300 lg:text-5xl dt:text-6xl'>
                  {contact.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <small className='absolute text-xs font-semibold text-center -translate-x-1/2 cursor-default bottom-2 left-1/2 text-battleship-gray'>
        &copy; 2023 Oleg Didechkin. All rights reserved.
      </small>
    </section>
  );
};

export default Contact;
