"use client";

import { useInView } from "react-intersection-observer";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FullStack = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });

  return (
    <div ref={ref} className="relative h-[40rem] w-full max-w-[340px]">
      <h3
        className={cn(
          "animate-fade-down animate-duration-[1500ms] animate-delay-[500ms] animate-ease-in-out absolute inset-0 h-16 pt-5 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        Full-Stack
      </h3>
      <p
        className={cn(
          "animate-fade-up animate-duration-[1500ms] animate-delay-[500ms] animate-ease-in-out absolute -inset-x-8 inset-y-16 w-[340px] text-2xl leading-[150%] pt-3 italic text-center text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        Today, I stand at a crossroads, merging experience with vision.
        Embracing full-stack potential, I've embarked on the Node.js journey. I
        now craft comprehensive applications, seamlessly blending frontend and
        backend expertise, using efficient tools and techniques.
      </p>
      <div
        className={cn(
          "animate-fade animate-duration-[1500ms] animate-delay-[1500ms] animate-ease-in-out absolute inset-y-[38rem] -inset-x-[2rem] flex flex-col items-center justify-center w-[340px] px-2 space-y-5 mb:flex-row mb:space-y-0 mb:justify-between mb:-inset-x-[1.75rem] mb:inset-y-[36rem]",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        <Link
          href="https://github.com/Olacdy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review a GitHub page">
          <Button
            aria-label="GitHub page"
            className="flex items-center justify-center space-x-3 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            <Icons.github />
            <span>GitHub</span>
          </Button>
        </Link>
        <Link
          href="https://Olacdy.github.io/Full-Stack-Developer-CV/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review a resume">
          <Button
            aria-label="Resume page"
            className="flex items-center justify-center space-x-3 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            <Icons.resume />
            <span>Resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FullStack;
