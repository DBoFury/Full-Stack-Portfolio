'use client';

import { useEffect, useRef } from 'react';

import { useActiveSectionContext } from '@/context/active-section-context';

import { LazyMotion, domAnimation, domMax } from 'framer-motion';

import Contact from '@/components/desktop/Contact';
import Header from '@/components/desktop/Header';
import ScrollFooter from '@/components/desktop/ScrollFooter';
import About from '@/components/desktop/about/About';
import Work from '@/components/desktop/work/Work';
import Hero from './Hero';

import { sections } from '@/helpers/data';
import { getNameByNumber } from '@/lib/utils';

const Desktop = () => {
  const { setActiveSection, chunkRef } = useActiveSectionContext();
  const isScrollingRef = useRef(false);
  const isTouchPadRef = useRef(false);

  const handleScroll = (e: WheelEvent, container: HTMLElement) => {
    if (!isTouchPadRef.current) {
      isTouchPadRef.current = !Number.isInteger(e.deltaY);
    }

    if (isTouchPadRef.current) {
      return;
    }

    e.preventDefault();

    if (isScrollingRef.current) {
      return;
    }

    const maxChunk =
      Math.ceil(container.scrollHeight / container.offsetHeight) - 1;

    if (e.deltaY > 0) {
      const nextChunk = chunkRef.current + 1;
      if (nextChunk <= maxChunk) {
        isScrollingRef.current = true;
        chunkRef.current = nextChunk;
        container.scrollTo({
          top: nextChunk * container.offsetHeight,
          behavior: 'smooth',
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    } else {
      const prevChunk = chunkRef.current - 1;
      if (prevChunk >= 0) {
        isScrollingRef.current = true;
        chunkRef.current = prevChunk;
        container.scrollTo({
          top: prevChunk * container.offsetHeight,
          behavior: 'smooth',
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    }

    setActiveSection(getNameByNumber(sections, chunkRef.current));
  };

  useEffect(() => {
    const container = document.querySelector('.content') as HTMLElement;

    container.addEventListener('wheel', (event: WheelEvent) =>
      handleScroll(event, container)
    );

    return () => {
      container.removeEventListener('wheel', (event: WheelEvent) =>
        handleScroll(event, container)
      );
    };
  }, []);

  return (
    <main className='hidden content lg:block'>
      <LazyMotion features={domMax}>
        <Header />
      </LazyMotion>

      <LazyMotion features={domAnimation}>
        <Hero />
        <About />
        <Work />
        <Contact />
      </LazyMotion>

      <ScrollFooter />
    </main>
  );
};

export default Desktop;
