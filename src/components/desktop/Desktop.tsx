"use client";

import { useEffect, useState } from "react";
import Header from "@/components/desktop/Header";
import Hero from "@/components/desktop/Hero";
import About from "@/components/desktop/about/About";
import Projects from "@/components/desktop/projects/Projects";
import Contact from "@/components/desktop/Contact";
import ScrollFooter from "@/components/desktop/ScrollFooter";

const Desktop = () => {
  const [chunkSize, setChunkSize] = useState(0);
  const [currentChunk, setCurrentChunk] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    if (isScrolling) {
      return;
    }

    setIsScrolling(true);

    const container = document.querySelector(".content") as HTMLElement;
    const maxChunks = Math.ceil(container.scrollHeight / chunkSize) - 1;

    if (event.deltaY > 0) {
      scrollToNextChunk(container, maxChunks);
    } else if (event.deltaY < 0) {
      scrollToPreviousChunk(container);
    }
  };

  const scrollToNextChunk = (container: HTMLElement, maxChunks: number) => {
    const nextChunk = currentChunk + 1;
    if (nextChunk <= maxChunks) {
      setCurrentChunk(nextChunk);
      container.scrollTo({
        top: nextChunk * chunkSize,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsScrolling(false), 500);
  };

  const scrollToPreviousChunk = (container: HTMLElement) => {
    const previousChunk = currentChunk - 1;
    if (previousChunk >= 0) {
      setCurrentChunk(previousChunk);
      container.scrollTo({
        top: previousChunk * chunkSize,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    const container = document.querySelector(".content") as HTMLElement;
    setChunkSize(window.innerHeight);
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className="hidden content lg:block">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollFooter />
    </main>
  );
};

export default Desktop;
