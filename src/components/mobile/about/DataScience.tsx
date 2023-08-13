"use client";

import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DataScience = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div ref={ref} className="relative h-[56rem] w-full max-w-[340px]">
      <h3
        className={cn(
          "animate-fade-up animate-duration-[2000ms] absolute inset-0 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        Data Science
      </h3>
      <span
        className={cn(
          "animate-in zoom-in animate-duration-[700ms] inset-y-16 inset-x-[8.225rem] w-6 h-6 rounded-full absolute bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
      />
      <Separator
        className={cn(
          "absolute inset-x-[50%] inset-y-20 w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[500ms] fill-mode-forwards bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "2.5rem",
        }}
      />
      <div className="absolute inset-y-36 -inset-x-6">
        <Image
          className={cn(
            "animate-scale-in animate-duration-[1000ms] animate-delay-[1200ms] fill-mode-forwards p-6 ml-24 rounded-lg shadow-md bg-gray-50",
            {
              paused: !inView,
              running: inView,
            }
          )}
          src="/Full-Stack-Portfolio/DS.webp"
          alt="Data Science Illustration"
          width={460}
          height={400}
          style={{ scale: 0 }}
        />
        <div
          className={cn(
            "animate-bg-appearance animate-delay-[1100ms] animate-duration-[1000ms] fill-mode-forwards z-[-1] absolute inset-x-44 -inset-y-16 w-[450px] bg-no-repeat bg-contain bg-mobile-about-1",
            {
              paused: !inView,
              running: inView,
            }
          )}
          style={{ scale: 0 }}
        />
      </div>
      <Separator
        className={cn(
          "absolute inset-x-[50%] inset-y-[28.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[2000ms] fill-mode-forwards bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "2.5rem",
        }}
      />
      <p
        className={cn(
          "animate-fade-down animate-duration-[1000ms] animate-delay-[2800ms] animate-ease-in-out absolute inset-y-[31rem] text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        My expedition as a software developer commenced with the elegant
        language of Python. This initial foray into the realm of Data Science
        set the foundation for my evolving voyage.
      </p>
      <Separator
        className={cn(
          "absolute inset-x-[50%] inset-y-[52.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[4000ms] fill-mode-forwards bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "2.5rem",
        }}
      />
    </div>
  );
};

export default DataScience;
