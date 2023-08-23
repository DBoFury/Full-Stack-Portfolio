'use client';

import { useState } from 'react';

import { Icons } from '@/components/Icons';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { motion } from 'framer-motion';

import { skills } from '@/helpers/data';

const SkillsMobile = () => {
  const [tabsValue, setTabsValue] = useState<string>('hard');
  const [isInit, setIsInit] = useState<boolean>(true);

  const handleTabChange = (value: string) => {
    setTabsValue(value);

    if (isInit) {
      setIsInit(false);
    }
  };

  return (
    <section className='pt-16'>
      <h2 className='text-4xl font-semibold text-center text-pine-green'>
        Skills
      </h2>
      <Tabs
        value={tabsValue}
        onValueChange={handleTabChange}
        className='flex flex-col items-center w-full pt-5'>
        <TabsList className='flex space-x-5 bg-transparent border h-fit border-battleship-gray'>
          <TabsTrigger
            className='w-28 text-3xl data-[state=active]:text-pine-green data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent'
            value='hard'>
            Hard
          </TabsTrigger>
          <Separator className='h-10 bg-gray-300' orientation='vertical' />
          <TabsTrigger
            className='w-28 text-3xl data-[state=active]:text-pine-green data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent'
            value='soft'>
            Soft
          </TabsTrigger>
        </TabsList>
        <TabsContent value='hard' className='h-[320px]'>
          <div className='flex flex-col items-center justify-center pt-5'>
            <ul className='grid items-center grid-cols-3 justify-items-center gap-x-3 gap-y-4 md:grid-cols-6'>
              {skills.frontend.map((skill, index) => {
                const Icon = Icons[skill.icon as keyof typeof Icons];

                return (
                  <motion.li
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
                    <Icon />
                  </motion.li>
                );
              })}
            </ul>

            <ul className='grid items-center grid-cols-3 pt-5 justify-items-center gap-x-4 gap-y-4 max-w-[380px]'>
              {skills.backend.map((skill, index) => {
                const Icon = Icons[skill.icon as keyof typeof Icons];

                return (
                  <motion.li
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
                      delay: 0.05 * (index + skills.frontend.length),
                    }}>
                    <Icon />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value='soft' className='h-[320px]'>
          <div className='flex flex-col items-center justify-center pt-4 space-y-5'>
            <motion.div
              className='w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.6, 0.8, 1],
              }}>
              <Icons.cogs />
              <p className='text-2xl font-medium text-onyx'>Problem solving</p>
            </motion.div>
            <motion.div
              className='w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0, 0.7, 0.8, 1],
              }}>
              <Icons.chart />
              <p className='text-2xl font-medium text-onyx'>
                Critical thinking
              </p>
            </motion.div>
            <motion.div
              className='w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.4,
                ease: [0, 0.7, 0.8, 1],
              }}>
              <Icons.shapes />
              <p className='text-2xl font-medium text-onyx'>Adaptability</p>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default SkillsMobile;
