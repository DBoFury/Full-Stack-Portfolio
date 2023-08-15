"use client";

import { useInView } from "react-intersection-observer";
import { Icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const WebDevelopment = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center cursor-default section">
      <div className="absolute -inset-x-52 inset-y-40 w-72 h-[32rem] bg-ruddy-blue rounded-2xl -rotate-12" />
      <div className="relative h-[40vh] dt:mr-20">
        <Separator
          className={cn(
            "absolute animate-grow-line-vertical animate-duration-[500ms] fill-mode-forwards inset-x-0 -inset-y-[15vh] w-1 h-0 bg-onyx",
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
            "animate-scale-in animate-duration-[700ms] animate-delay-[300ms] fill-mode-forwards inset-y-0 -inset-x-[0.75rem] w-7 h-7 rounded-full absolute bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
          style={{ scale: 0 }}
        />
        <h3
          className={cn(
            "animate-fade-right animate-duration-[1000ms] animate-delay-[900ms] absolute w-80 h-10 text-4xl italic font-medium text-center inset-x-6 -inset-y-10 text-pine-green",
            {
              paused: !inView,
              running: inView,
            }
          )}>
          Web Development
        </h3>
        <Separator
          className={cn(
            "absolute animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[900ms] fill-mode-forwards inset-0 w-1 h-0 bg-onyx",
            {
              paused: !inView,
              running: inView,
            }
          )}
          orientation="vertical"
          style={{
            "--line-height": "57vh",
          }}
        />
        <div className="absolute inset-y-20 -inset-x-[25.5rem] w-[20rem] h-[22rem] dt:w-[22rem] dt:-inset-x-[29.5rem]">
          <div className="relative">
            <Separator
              className={cn(
                "absolute animate-duration-[500ms] animate-delay-[1500ms] animate-grow-line-horizontal fill-mode-forwards w-0 top-44 -right-[5.5rem] bg-battleship-gray",
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
                "animate-fade-left animate-delay-[1600ms] animate-ease-in-out text-[1.6rem] leading-[150%] pt-3 italic text-center text-onyx",
                {
                  paused: !inView,
                  running: inView,
                }
              )}>
              Transitioning, I immersed myself in web development, powered by
              Python. Guided by Django and Flask frameworks, I sculpted web
              applications, combining functionality and aesthetics seamlessly.
            </p>
          </div>
        </div>
        <div className="absolute inset-y-80 inset-x-[5.5rem] w-[26rem] h-36">
          <div className="relative">
            <Separator
              className={cn(
                "absolute animate-duration-[500ms] animate-delay-[2200ms] animate-grow-line-horizontal fill-mode-forwards w-0 top-16 -left-[3.5rem] bg-battleship-gray",
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
            <div className="relative flex items-center justify-center p-5 mt-5 space-x-3">
              <Icons.python className="fill-white" />
              <Icons.plus stroke="#FFFFFF" size={60} />
              <div
                className={cn(
                  "animate-fade-up animate-delay-[2500ms] animate-ease-out flex items-center justify-center space-x-2",
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
                  "z-[-1] animate-bg-appearance animate-delay-[2200ms] animate-duration-[1000ms] fill-mode-forwards absolute -inset-x-4 -inset-y-0 w-[180px] h-[130px] bg-ruddy-blue rounded-2xl",
                  {
                    paused: !inView,
                    running: inView,
                  }
                )}
                style={{ scale: 0, "--rotation": "rotate(-168deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
