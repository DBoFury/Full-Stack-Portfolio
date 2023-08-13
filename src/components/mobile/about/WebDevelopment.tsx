"use client";

import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const WebDevelopment = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });

  return (
    <div ref={ref} className="relative h-[46rem] w-full max-w-[340px]">
      <h3
        className={cn(
          "animate-fade-down animate-duration-[2000ms] animate-delay-[800ms] absolute inset-0 -inset-x-12 w-96 h-10 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        Web-development
      </h3>
      <Separator
        className={cn(
          "absolute inset-x-[50%] inset-y-[3.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[2200ms] fill-mode-forwards bg-onyx",
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
          "animate-fade-down animate-duration-[1500ms] animate-delay-[3300ms] animate-ease-in-out absolute inset-y-24 text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}>
        Transitioning, I immersed myself in web development, powered by Python.
        Guided by Django and Flask frameworks, I sculpted web applications,
        combining functionality and aesthetics seamlessly.
      </p>
      <Separator
        className={cn(
          "absolute inset-x-[50%] inset-y-[30rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[4500ms] fill-mode-forwards bg-onyx",
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
      <div className="absolute -right-10 inset-y-[35rem] flex items-center justify-center space-x-3 rounded-lg shadow-sm">
        <Icons.python className="fill-white" />
        <Icons.plus
          className={cn(
            "animate-plus-appearance animate-duration-[800ms] animate-delay-[5000ms] animate-ease-out fill-mode-forwards",
            {
              paused: !inView,
              running: inView,
            }
          )}
          stroke="#424241"
          size={60}
          style={{ scale: 0 }}
        />
        <div
          className={cn(
            "animate-fade-up animate-delay-[5400ms] animate-ease-out flex items-center justify-center space-x-2",
            {
              paused: !inView,
              running: inView,
            }
          )}>
          <Icons.django />
          <p className="text-4xl font-semibold text-onyx">/</p>
          <Icons.flask />
        </div>
        <div
          className={cn(
            "animate-bg-appearance animate-delay-[4500ms] animate-duration-[1000ms] fill-mode-forwards z-[-1] absolute -inset-x-20 -inset-y-12 w-[300px] h-[200px] bg-no-repeat bg-contain bg-mobile-about-2",
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
          "absolute inset-x-[50%] inset-y-[37.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[5800ms] fill-mode-forwards bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "8rem",
        }}
      />
      <span
        className={cn(
          "animate-scale-in animate-duration-[700ms] animate-delay-[6000ms] fill-mode-forwards inset-y-[45rem] inset-x-[8.225rem] w-6 h-6 rounded-full absolute bg-onyx",
          {
            paused: !inView,
            running: inView,
          }
        )}
        style={{ scale: 0 }}
      />
    </div>
  );
};

export default WebDevelopment;
