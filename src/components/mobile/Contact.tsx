import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { contacts } from '@/helpers/data';

const ContactMobile = () => {
  return (
    <section className='relative w-full h-[110vh] pt-36 flex items-center flex-col overflow-clip min-h-[700px]'>
      <h2 className='text-6xl font-semibold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
        Contacts
      </h2>

      <div className='flex items-center justify-center flex-grow w-full'>
        <div className='flex flex-col items-center space-x-0 space-y-7 md:flex-row md:space-y-0 md:space-x-10'>
          {contacts.slice(2).map((contact) => {
            const Icon = Icons[contact.icon as keyof typeof Icons];

            return (
              <Link
                key={contact.name.toLowerCase()}
                className='group'
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={contact.ariaLabel}>
                <div className='group'>
                  <Icon className='w-16 h-16 focus:outline-none group-hover:scale-90 dark:fill-slate-200 sm:w-20 sm:h-20' />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <small className='absolute w-full text-xs font-semibold text-center cursor-default bottom-2 text-battleship-gray'>
        &copy; 2023 Oleg Didechkin. All rights reserved.
      </small>

      <Icons.triangle className='z-[-1] absolute bottom-[50%] -left-[100px] w-[200px] h-[200px] fill-ruddy-blue rotate-[61deg] sm:w-[300px] sm:h-[300px] sm:-left-[130px] dark:fill-ruddy-blue/70' />
      <Icons.triangle className='z-[-1] absolute -bottom-[10%] -right-[100px] w-[200px] h-[200px] fill-ruddy-blue rotate-[85deg] sm:w-[300px] sm:h-[300px] sm:-right-[130px] dark:fill-ruddy-blue/70' />
    </section>
  );
};

export default ContactMobile;
