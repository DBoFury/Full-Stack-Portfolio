"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const FullStack = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-20 space-y-20 section">
      <div className="absolute bg-no-repeat bg-contain bg-about-3-left top-20 -left-52 w-[28rem] h-[32rem]" />
      <div className="absolute bg-no-repeat bg-contain bg-about-3-right top-[22rem] -right-52 w-[28rem] h-[36rem]" />
      <div className="relative">
        <Separator
          className="relative w-1 h-[15vh] after:w-6 after:h-6 after:rounded-full after:absolute after:bottom-0 after:left-0 after:-translate-x-[42%] after:translate-y-1/2 after:bg-onyx after:content-[''] bg-onyx"
          orientation="vertical"
        />
        <h3 className="absolute left-0 text-4xl italic font-medium text-center -translate-x-1/2 w-52 -bottom-16 text-pine-green">
          Full-Stack
        </h3>
      </div>
      <div className="flex flex-col items-center space-y-16">
        <p className="text-[1.5rem] leading-[150%] pt-3 italic text-center max-w-[44rem] text-onyx">
          Today, I stand at a crossroads, merging experience with vision.
          Embracing full-stack potential, I've embarked on the Node.js journey.
          I now craft comprehensive applications, seamlessly blending frontend
          and backend expertise, using efficient tools and techniques.
        </p>
        <div className="flex items-center justify-between w-[24rem]">
          <Link
            href="https://github.com/DBoFury"
            target="_blank"
            rel="noopener noreferrer">
            <Button className="flex items-center justify-center px-6 space-x-3 text-2xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
              <Icons.github />
              <span>GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://dbofury.github.io/Full-Stack-Developer-CV/"
            target="_blank"
            rel="noopener noreferrer">
            <Button className="flex items-center justify-center px-6 space-x-3 text-2xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
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
