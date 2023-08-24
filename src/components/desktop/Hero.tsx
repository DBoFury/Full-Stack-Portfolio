'use client';

import { useState } from 'react';

import { m } from 'framer-motion';

import { Icons } from '@/components/Icons';
import { Switch } from '@/components/ui/switch';

import { skills } from '@/helpers/data';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [tabsValue, setTabsValue] = useState<string>('hard');
  const [isInit, setIsInit] = useState<boolean>(true);

  const handleTabChange = (checked: boolean) => {
    setTabsValue(checked ? 'soft' : 'hard');

    if (isInit) {
      setIsInit(false);
    }
  };

  return (
    <div
      id='home'
      className='flex flex-col items-center justify-center section'>
      <div className='flex space-x-12 max-w-[78rem] lg:mx-16 dt:mx-24 pt-28'>
        <div className='flex flex-col items-start justify-center space-y-4 text-left'>
          <h2 className='text-5xl font-bold cursor-default text-pine-green'>
            Full-Stack Developer
          </h2>
          <p className='text-onyx text-2xl leading-[165%] pr-1 cursor-default transition-colors dark:text-slate-300'>
            Greetings! I'm Oleg Didechkin, a dedicated and imaginative
            web-developer with a rich array of expertise and a passion for
            crafting digital experiences.
          </p>
        </div>
        <div className='relative'>
          <span className='absolute font-semibold -inset-y-8 text-2xl rotate-45 inset-x-[200px] text-pine-green cursor-default '>
            *click
          </span>
          <Switch
            className='rotate-45'
            onCheckedChange={handleTabChange}
            aria-label='Skills toggle button'
          />
        </div>
      </div>

      <div className='pt-16'>
        <h2 className='text-4xl font-semibold text-center cursor-default text-pine-green '>
          Skills
        </h2>

        {tabsValue === 'hard' && (
          <div className='h-[210px]'>
            <div className='flex flex-col items-center justify-center pt-5'>
              <ul className='grid items-center grid-cols-3 justify-items-center gap-x-3 gap-y-4 md:grid-cols-6'>
                {skills.frontend.map((skill, index) => {
                  const Icon = Icons[skill.icon as keyof typeof Icons];

                  return (
                    <m.li
                      key={skill.name.toLowerCase()}
                      initial={{
                        opacity: isInit ? 1 : 0,
                        y: isInit ? 0 : 100,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.05 * index,
                      }}>
                      <Icon className='dark:fill-slate-200' />
                    </m.li>
                  );
                })}
              </ul>

              <ul className='grid items-center grid-cols-3 pt-5 justify-items-center gap-x-4 gap-y-4 max-w-[380px]'>
                {skills.backend.map((skill, index) => {
                  const Icon = Icons[skill.icon as keyof typeof Icons];

                  return (
                    <m.li
                      key={skill.name.toLowerCase()}
                      initial={{
                        opacity: isInit ? 1 : 0,
                        y: isInit ? 0 : 100,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.05 * index,
                      }}>
                      <Icon className='dark:fill-slate-200' />
                    </m.li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {tabsValue === 'soft' && (
          <div className='h-[210px] cursor-default'>
            <div className='flex flex-col items-center justify-center pt-4 space-y-4'>
              {skills.soft.map((skill, index) => {
                return (
                  <m.div
                    className={cn('flex items-center gap-2', {
                      'flex-row-reverse': index % 2 !== 0,
                    })}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 * index,
                    }}>
                    <h3 className='text-2xl font-medium text-pine-green'>
                      {skill.name}
                    </h3>
                    <span className='text-2xl font-medium text-battleship-gray dark:text-slate-300'>
                      /
                    </span>
                    <p className='pt-[2px] text-left text-onyx text-lg dark:text-slate-300'>
                      {skill.description}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
