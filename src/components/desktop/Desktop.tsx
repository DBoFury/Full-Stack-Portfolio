"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/desktop/Header";
import Hero from "@/components/desktop/Hero";
import About from "@/components/desktop/about/About";
import Work from "@/components/desktop/work/Work";
import Contact from "@/components/desktop/Contact";
import ScrollFooter from "@/components/desktop/ScrollFooter";

const Desktop = () => {
  const chunkRef = useRef(0);
  const isScrollingRef = useRef(false);

  const handleScroll = (e: WheelEvent, container: HTMLElement) => {
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
          behavior: "smooth",
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
          behavior: "smooth",
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    }
  };

  useEffect(() => {
    const container = document.querySelector(".content") as HTMLElement;

    container.addEventListener("wheel", (event: WheelEvent) =>
      handleScroll(event, container)
    );

    return () => {
      container.removeEventListener("wheel", (event: WheelEvent) =>
        handleScroll(event, container)
      );
    };
  }, []);

  return (
    <main className="hidden content lg:block">
      <Header chunkRef={chunkRef} />
      <Hero />
      <About />
      <Work />
      <Contact />
      <ScrollFooter />
    </main>
  );
};

export default Desktop;
