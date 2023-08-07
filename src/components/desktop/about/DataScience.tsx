"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const DataScience = () => {
  return (
    <div
      id="about"
      className="z-0 flex flex-col items-center justify-center h-screen mt-5 space-y-16">
      <h2 className="text-6xl font-bold text-pine-green">About Me</h2>
      <div className="relative">
        <h3 className="absolute w-64 text-4xl italic font-medium text-center -top-8 right-[110%] text-pine-green">
          Data Science
        </h3>
        <Separator
          className="mt-6 relative w-1 h-[60vh] after:w-6 after:h-6 after:rounded-full after:absolute after:top-0 after:left-0 after:-translate-x-[42%] after:-translate-y-1/2 after:bg-onyx after:content-[''] bg-onyx"
          orientation="vertical"
        />
        <div className="absolute inset-y-36 -inset-x-[30rem] w-96 h-96">
          <div className="relative">
            <Image
              className="py-6 rounded-lg shadow-xl bg-gray-50"
              src="/Full-Stack-Portfolio/DS.png"
              alt="Data Science Illustration"
              width={440}
              height={440}
            />
            <Separator
              className="absolute w-10 top-48 -right-[4.5rem] bg-battleship-gray"
              orientation="horizontal"
            />
            <div className="absolute bg-no-repeat bg-contain -inset-x-36 z-[-1] -inset-y-36 bg-about-1 w-96 h-96" />
          </div>
        </div>
        <div className="absolute inset-y-24 inset-x-24 w-96 h-96">
          <div className="relative">
            <Separator
              className="absolute w-10 top-36 -left-[4rem] bg-battleship-gray"
              orientation="horizontal"
            />
            <p className="text-[1.75rem] leading-[150%] pt-3 italic text-left max-w-[420px] text-onyx">
              My expedition as a software developer commenced with the elegant
              language of Python. This initial foray into the realm of Data
              Science set the foundation for my evolving voyage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
