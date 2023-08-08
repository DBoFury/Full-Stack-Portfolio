"use client";

import { useEffect, useState } from "react";
import Header from "@/components/desktop/Header";
import Hero from "@/components/desktop/Hero";
import About from "@/components/desktop/about/About";
import Projects from "@/components/desktop/projects/Projects";
import Contact from "@/components/desktop/Contact";
import ScrollFooter from "@/components/desktop/ScrollFooter";

const Desktop = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (event: WheelEvent) => {
      if (isScrolling) return;

      event.preventDefault();
      const delta = event.deltaY;

      const container = document.querySelector(".content") as HTMLElement;

      container.scrollBy({
        top: delta,
        behavior: "smooth",
      });

      setTimeout(() => setIsScrolling(false), 1000);
    };

    const container = document.querySelector(".content") as HTMLElement;
    container.addEventListener("wheel", onScroll);

    return () => {
      container.removeEventListener("wheel", onScroll);
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
