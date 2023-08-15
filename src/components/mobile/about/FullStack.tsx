"use client";

import { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FullStack = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleVisible = useOnScreen(titleRef);

  const textRef = useRef<HTMLParagraphElement>(null);
  const isTextVisible = useOnScreen(textRef);

  return (
    <div className="relative h-[40rem] w-full max-w-[340px]">
      <h3
        ref={titleRef}
        className={cn(
          "animate-fade-down animate-duration-[1500ms] animate-ease-in-out absolute inset-0 h-16 pt-5 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !isTitleVisible,
            running: isTitleVisible,
          }
        )}>
        Full-Stack
      </h3>
      <p
        ref={textRef}
        className={cn(
          "animate-fade-up animate-duration-[1500ms] animate-ease-in-out absolute h-96 -inset-x-8 inset-y-16 w-[340px] text-2xl leading-[150%] italic text-center text-onyx",
          {
            paused: !isTextVisible,
            running: isTextVisible,
          }
        )}>
        Today, I stand at a crossroads, merging experience with vision.
        Embracing full-stack potential, I've embarked on the Node.js journey. I
        now craft comprehensive applications, seamlessly blending frontend and
        backend expertise, using efficient tools and techniques.
      </p>
      <div className="absolute inset-y-[38rem] -inset-x-[2rem] flex flex-col items-center justify-center w-[340px] px-2 space-y-5 mb:flex-row mb:space-y-0 mb:justify-between mb:-inset-x-[1.75rem] mb:inset-y-[36rem]">
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
