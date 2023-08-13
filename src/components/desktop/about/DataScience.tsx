"use client";

import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DataScience = () => {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <div
      ref={ref}
      id="about"
      className="flex flex-col items-center justify-center space-y-16 section">
      <h2 className="text-6xl font-bold text-pine-green dt:mr-20">About Me</h2>
      <div className="relative h-[60vh] dt:mr-20">
        <h3
          className={cn(
            "animate-scale-in animate-duration-[1000ms] animate-delay-[500ms] fill-mode-forwards absolute w-64 text-4xl italic font-medium text-center -top-8 right-[110%] text-pine-green",
            {
              paused: !inView,
              running: inView,
            }
          )}
          style={{ scale: 0 }}>
          Data Science
        </h3>
        <Separator
          className={cn(
            "absolute mt-6 w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[500ms] fill-mode-forwards bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
          orientation="vertical"
          style={{
            "--line-height": "60vh",
          }}
        />
        <span
          className={cn(
            "animate-in zoom-in duration-700 inset-y-0 -inset-x-[0.75rem] w-7 h-7 rounded-full absolute bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
        />
        <div className="absolute inset-y-36 -inset-x-[30rem] w-96 h-96">
          <div className="relative">
            <Image
              className={cn(
                "animate-scale-in animate-duration-[1000ms] animate-delay-[1700ms] fill-mode-forwards py-6 rounded-lg shadow-xl bg-gray-50",
                {
                  paused: !inView,
                  running: inView,
                }
              )}
              src="/Full-Stack-Portfolio/DS.png"
              alt="Data Science Illustration"
              width={440}
              height={440}
              style={{ scale: 0 }}
            />
            <Separator
              className={cn(
                "absolute w-0 top-48 -right-[4.5rem] animate-duration-[500ms] animate-delay-[1500ms] animate-grow-line-horizontal fill-mode-forwards bg-battleship-gray",
                {
                  paused: !inView,
                  running: inView,
                }
              )}
              orientation="horizontal"
              style={{
                "--line-width": "40px",
              }}
            />
            <div
              className={cn(
                "animate-bg-appearance animate-delay-[1600ms] animate-duration-[1000ms] fill-mode-forwards absolute bg-no-repeat bg-contain -inset-x-36 z-[-1] -inset-y-36 bg-about-1 w-96 h-96",
                {
                  paused: !inView,
                  running: inView,
                }
              )}
              style={{ scale: 0 }}
            />
          </div>
        </div>
        <div className="absolute inset-y-24 inset-x-24 w-96 h-96">
          <div className="relative">
            <Separator
              className={cn(
                "absolute w-0 top-36 -left-[4rem] animate-duration-[500ms] animate-delay-[2300ms] animate-grow-line-horizontal fill-mode-forwards bg-battleship-gray",
                {
                  paused: !inView,
                  running: inView,
                }
              )}
              orientation="horizontal"
              style={{
                "--line-width": "40px",
              }}
            />
            <p
              className={cn(
                "animate-fade-right animate-delay-[2450ms] animate-ease-in-out text-[1.75rem] leading-[150%] pt-3 italic text-left max-w-[420px] text-onyx",
                {
                  paused: !inView,
                  running: inView,
                }
              )}>
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
