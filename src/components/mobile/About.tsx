"use client";

import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutMobile = () => {
  return (
    <div className="pt-24">
      <h2 className="text-6xl font-semibold text-center text-pine-green">
        About Me
      </h2>
      <div className="flex flex-col items-center justify-center pt-12">
        <h3 className="text-4xl italic font-medium text-center text-onyx">
          Data Science
        </h3>
        <Separator
          className="mt-6 relative w-1 h-10 after:w-6 after:h-6 after:rounded-full after:absolute after:top-0 after:left-0 after:-translate-x-[42%] after:-translate-y-1/2 after:bg-onyx after:content-[''] bg-onyx"
          orientation="vertical"
        />
        <div className="relative pt-3">
          <Image
            className="p-6 ml-24 rounded-lg shadow-sm bg-gray-50"
            src="/Full-Stack-Portfolio/DS.png"
            alt="Data Science Illustration"
            width={340}
            height={380}
          />
          <div className="z-[-1] absolute inset-x-44 -inset-y-16 w-[600px] bg-no-repeat bg-contain bg-mobile-about-1" />
        </div>
        <Separator className="w-1 h-10 mt-3 bg-onyx" orientation="vertical" />
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          My expedition as a software developer commenced with the elegant
          language of Python. This initial foray into the realm of Data Science
          set the foundation for my evolving voyage.
        </p>
        <Separator className="w-1 h-10 mt-3 bg-onyx" orientation="vertical" />
        <h3 className="pt-5 text-4xl italic font-medium text-center text-onyx">
          Web-development
        </h3>
        <Separator className="w-1 h-10 mt-3 bg-onyx" orientation="vertical" />
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          Transitioning, I immersed myself in web development, powered by
          Python. Guided by Django and Flask frameworks, I sculpted web
          applications, combining functionality and aesthetics seamlessly.
        </p>
        <Separator className="w-1 h-10 mt-3 bg-onyx" orientation="vertical" />
        <div className="relative flex items-center justify-center mt-5 space-x-3 rounded-lg shadow-sm">
          <Icons.python className="fill-white" />
          <Icons.plus stroke="#424241" size={60} />
          <div className="flex items-center justify-center space-x-2">
            <Icons.django />
            <p className="text-4xl font-semibold text-onyx">/</p>
            <Icons.flask />
          </div>
          <div className="z-[-1] absolute -inset-x-20 -inset-y-12 w-[300px] h-[200px] bg-no-repeat bg-contain bg-mobile-about-2" />
        </div>
        <Separator
          className="mt-6 relative w-1 h-40 after:w-6 after:h-6 after:rounded-full after:absolute after:bottom-0 after:left-0 after:-translate-x-[42%] after:translate-y-1/2 after:bg-onyx after:content-[''] bg-onyx"
          orientation="vertical"
        />
        <h3 className="pt-5 text-4xl italic font-medium text-center text-onyx">
          Full-Stack
        </h3>
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          Today, I stand at a crossroads, merging experience with vision.
          Embracing full-stack potential, I've embarked on the Node.js journey.
          I now craft comprehensive applications, seamlessly blending frontend
          and backend expertise, using efficient tools and techniques.
        </p>
        <div className="flex flex-col items-center justify-center w-full px-10 pt-10 max-w-[420px] space-y-5 mb:flex-row mb:space-y-0 mb:justify-between">
          <Link
            href="https://github.com/Olacdy"
            target="_blank"
            rel="noopener noreferrer">
            <Button className="flex items-center justify-center space-x-3 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
              <Icons.github />
              <span>GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://Olacdy.github.io/Full-Stack-Developer-CV/"
            target="_blank"
            rel="noopener noreferrer">
            <Button className="flex items-center justify-center space-x-3 text-xl font-semibold ease-out bg-white py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
              <Icons.resume />
              <span>Resume</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
