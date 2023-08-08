"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center section">
      <div className="flex space-x-12 max-w-[78rem] lg:mr-36 dt:mr-56 pt-28">
        <div className="flex flex-col items-end justify-center space-y-4 text-right">
          <h2 className="text-5xl font-bold text-pine-green">
            Full-Stack Developer
          </h2>
          <p className="text-onyx text-2xl leading-[165%] pr-1">
            Greetings! I'm Oleg Didechkin, a dedicated and imaginative
            web-developer with a rich array of expertise and a passion for
            crafting digital experiences.
          </p>
        </div>
        <div className="relative">
          <div className="bg-white rounded-full w-72 h-72" />
          <div className="bg-photo-back bg-contain bg-no-repeat w-[26rem] h-[26rem] absolute -inset-y-4 -inset-x-5 z-[-1]" />
        </div>
      </div>

      <div className="pt-16">
        <h2 className="text-4xl font-semibold text-center text-pine-green">
          Skills
        </h2>
        <Tabs
          defaultValue="hard"
          className="flex flex-col items-center w-full pt-5">
          <TabsList className="flex space-x-5 bg-transparent border h-fit border-battleship-gray">
            <TabsTrigger
              className="w-28 text-3xl data-[state=active]:text-pine-green"
              value="hard">
              Hard
            </TabsTrigger>
            <Separator className="h-10 bg-gray-300" orientation="vertical" />
            <TabsTrigger
              className="w-28 text-3xl data-[state=active]:text-pine-green"
              value="soft">
              Soft
            </TabsTrigger>
          </TabsList>
          <TabsContent value="hard" className="h-[210px]">
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="grid items-center grid-cols-3 justify-items-center gap-x-3 gap-y-4 md:grid-cols-6">
                <Icons.html className="duration-1000 animate-in zoom-in" />
                <Icons.css className="duration-1000 animate-in zoom-in" />
                <Icons.js className="duration-1000 animate-in zoom-in" />
                <Icons.react className="duration-1000 animate-in zoom-in" />
                <Icons.next className="duration-1000 animate-in zoom-in" />
                <Icons.tailwindcss className="duration-1000 animate-in zoom-in" />
              </div>

              <div className="grid items-center grid-cols-3 pt-5 justify-items-center gap-x-4 gap-y-4 max-w-[380px]">
                <Icons.python className="duration-1500 animate-in slide-in-from-left" />
                <Icons.node className="duration-1500 animate-in slide-in-from-left" />
                <Icons.docker className="duration-1500 animate-in slide-in-from-left" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="soft" className="h-[210px]">
            <div className="flex flex-col items-center justify-center pt-4 space-y-4">
              <div className="flex items-center space-x-2 soft-skills-animation">
                <h3 className="text-2xl font-medium text-pine-green">
                  Problem solving
                </h3>
                <span className="text-2xl font-medium text-battleship-gray">
                  /
                </span>
                <p className="pt-[2px] text-left text-onyx text-lg">
                  creative and effective ways to find innovative solutions
                </p>
              </div>
              <div className="flex items-center space-x-2 delay-700 soft-skills-animation">
                <p className="pt-[2px] text-left text-onyx text-lg">
                  The ability to analyze situations, evaluate different options
                </p>
                <span className="text-2xl font-medium text-battleship-gray">
                  /
                </span>
                <h3 className="text-2xl font-medium text-pine-green">
                  Critical Thinking
                </h3>
              </div>
              <div className="flex items-center space-x-2 delay-1400 soft-skills-animation">
                <h3 className="text-2xl font-medium text-pine-green">
                  Adaptability
                </h3>
                <span className="text-2xl font-medium text-battleship-gray">
                  /
                </span>
                <p className="pt-[2px] text-left text-onyx text-lg">
                  fluent flexibility across full-stack technologies and tasks
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Hero;
