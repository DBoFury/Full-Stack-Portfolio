"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [tabsValue, setTabsValue] = useState<string>("hard");
  const [isInit, setIsInit] = useState<boolean>(true);

  const handleTabChange = (checked: boolean) => {
    setTabsValue(checked ? "soft" : "hard");

    if (isInit) {
      setIsInit(false);
    }
  };

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center section">
      <div className="flex space-x-12 max-w-[78rem] lg:mr-16 dt:mr-24 pt-28">
        <div className="flex flex-col items-start justify-center space-y-4 text-left">
          <h2 className="text-5xl font-bold text-pine-green">
            Full-Stack Developer
          </h2>
          <p className="text-onyx  text-2xl leading-[165%] pr-1">
            Greetings! I'm Oleg Didechkin, a dedicated and imaginative
            web-developer with a rich array of expertise and a passion for
            crafting digital experiences.
          </p>
        </div>
        <div className="relative">
          <span className="absolute font-semibold -inset-y-8 text-2xl rotate-45 inset-x-[200px] text-pine-green">
            *click
          </span>
          <Switch className="rotate-45" onCheckedChange={handleTabChange} />
        </div>
      </div>

      <div className="pt-16">
        <h2 className="text-4xl font-semibold text-center text-pine-green">
          Skills
        </h2>

        {tabsValue === "hard" && (
          <div className="h-[210px]">
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="grid items-center grid-cols-3 justify-items-center gap-x-3 gap-y-4 md:grid-cols-6">
                <Icons.html
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.css
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.js
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.react
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.next
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.tailwindcss
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
              </div>

              <div className="grid items-center grid-cols-3 pt-5 justify-items-center gap-x-4 gap-y-4 max-w-[380px]">
                <Icons.python
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.node
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
                <Icons.docker
                  className={cn({
                    "animate-duration-[1000ms] animate-in zoom-in": !isInit,
                  })}
                />
              </div>
            </div>
          </div>
        )}

        {tabsValue === "soft" && (
          <div className="h-[210px]">
            <div className="flex flex-col items-center justify-center pt-4 space-y-4">
              <div className="flex items-center space-x-2 animate-fade-down animate-duration-[1000ms] animate-ease-out">
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
              <div className="flex items-center space-x-2 animate-delay-[700ms] animate-fade-down animate-duration-[1000ms] animate-ease-out">
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
              <div className="flex items-center space-x-2 animate-delay-[1400ms] animate-fade-down animate-duration-[1000ms] animate-ease-out">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
