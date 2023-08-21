import Link from 'next/link';

import { Icons } from '@/components/Icons';
import { contacts } from '@/helpers/data';

const ContactMobile = () => {
  return (
    <div className='relative w-full h-[110vh] pt-36 flex items-center flex-col overflow-clip min-h-[700px]'>
      <h2 className='text-6xl font-semibold text-center text-pine-green'>
        Contact Me
      </h2>

      <div className='flex items-center justify-center flex-grow w-full'>
        <div className='flex flex-col items-center space-x-0 space-y-7 mb:flex-row mb:space-y-0 mb:space-x-10'>
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
                  <Icon className='focus:outline-none group-hover:scale-90' />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <small className='absolute w-full text-xs font-semibold text-center bottom-2 text-battleship-gray'>
        &copy; 2023 Oleg Didechkin. All rights reserved.
      </small>

      <Icons.triangle className='z-[-1] absolute bottom-[50%] -left-[100px] w-[200px] h-[200px] fill-ruddy-blue rotate-[61deg] sm:w-[300px] sm:h-[300px] sm:-left-[130px]' />
      <Icons.triangle className='z-[-1] absolute -bottom-[10%] -right-[100px] w-[200px] h-[200px] fill-ruddy-blue rotate-[85deg] sm:w-[300px] sm:h-[300px] sm:-right-[130px]' />
    </div>
  );
};

export default ContactMobile;
