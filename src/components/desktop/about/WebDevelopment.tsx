"use client";

import { Icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";

const WebDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center section">
      <div className="absolute bg-no-repeat bg-contain top-36 -left-36 bg-about-3 w-72 h-[32rem]" />
      <div className="relative">
        <Separator
          className="mt-6 relative w-1 h-[15vh]  bg-onyx"
          orientation="vertical"
        />
        <h3 className="absolute w-[22rem] text-4xl italic font-medium text-center top-28 left-5 text-pine-green">
          Web Development
        </h3>
        <Separator
          className="relative w-1 h-[57vh] after:w-6 after:h-6 after:rounded-full after:absolute after:top-0 after:left-0 after:-translate-x-[42%] after:-translate-y-1/2 after:bg-onyx after:content-[''] bg-onyx"
          orientation="vertical"
        />
        <div className="absolute inset-y-32 -inset-x-[25.5rem] w-[20rem] h-[22rem] dt:w-[22rem] dt:-inset-x-[29.5rem]">
          <div className="relative">
            <Separator
              className="absolute w-10 top-44 -right-[4rem] bg-battleship-gray"
              orientation="horizontal"
            />
            <p className="text-[1.6rem] leading-[150%] pt-3 italic text-center text-onyx">
              Transitioning, I immersed myself in web development, powered by
              Python. Guided by Django and Flask frameworks, I sculpted web
              applications, combining functionality and aesthetics seamlessly.
            </p>
          </div>
        </div>
        <div className="absolute inset-y-96 inset-x-[5.5rem] w-[26rem] h-36">
          <div className="relative">
            <Separator
              className="absolute w-10 top-16 -left-[3.5rem] bg-battleship-gray"
              orientation="horizontal"
            />
            <div className="relative flex items-center justify-center p-5 mt-5 space-x-3">
              <Icons.python className="fill-white" />
              <Icons.plus stroke="#FFFFFF" size={60} />
              <div className="flex items-center justify-center space-x-2">
                <Icons.django />
                <p className="text-4xl font-semibold text-onyx">/</p>
                <Icons.flask />
              </div>
              <div className="z-[-1] absolute -inset-x-4 -inset-y-0 w-[200px] h-[150px] bg-no-repeat bg-contain bg-about-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
