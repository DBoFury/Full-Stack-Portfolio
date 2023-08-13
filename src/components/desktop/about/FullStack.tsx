"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FullStack = () => {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start pt-20 space-y-20 section">
      <div className="absolute bg-no-repeat bg-contain bg-about-3-left top-20 -left-52 w-[28rem] h-[32rem]" />
      <div className="absolute bg-no-repeat bg-contain bg-about-3-right top-[22rem] -right-52 w-[28rem] h-[36rem]" />
      <div className="relative h-[15vh] dt:mr-20">
        <Separator
          className={cn(
            "absolute animate-grow-line-vertical animate-duration-[700ms] fill-mode-forwards inset-x-0 -inset-y-5 w-1 h-0 bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
          orientation="vertical"
          style={{
            "--line-height": "15vh",
          }}
        />
        <span
          className={cn(
            "animate-scale-in animate-duration-[700ms] animate-delay-[500ms] fill-mode-forwards inset-y-[12.5vh] -inset-x-[0.75rem] w-7 h-7 rounded-full absolute bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
          style={{ scale: 0 }}
        />
        <h3
          className={cn(
            "animate-fade-down animate-duration-[1000ms] animate-delay-[900ms] absolute left-0 text-4xl italic font-medium text-center w-52 h-10 -inset-x-24 inset-y-[17vh] text-pine-green",
            {
              paused: !inView,
              running: inView,
            }
          )}>
          Full-Stack
        </h3>
      </div>
      <div className="flex flex-col items-center space-y-16 dt:mr-20">
        <p
          className={cn(
            "animate-fade-down animate-ease-in-out animate-duration-[1000ms] animate-delay-[1500ms] text-[1.5rem] leading-[150%] pt-3 italic text-center max-w-[44rem] text-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}>
          Today, I stand at a crossroads, merging experience with vision.
          Embracing full-stack potential, I've embarked on the Node.js journey.
          I now craft comprehensive applications, seamlessly blending frontend
          and backend expertise, using efficient tools and techniques.
        </p>
        <div
          className={cn(
            "animate-fade-down animate-ease-in-out animate-duration-[1000ms] animate-delay-[1800ms] flex items-center justify-between w-[24rem]",
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
              className="flex items-center justify-center px-6 space-x-3 text-2xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
              <Icons.github />
              <span>GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://olacdy.github.io/Full-Stack-Developer-CV/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Review a resume">
            <Button
              aria-label="Resume page"
              className="flex items-center justify-center px-6 space-x-3 text-2xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
              <Icons.resume />
              <span>Resume</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
