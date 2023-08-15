"use client";

import { useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const WebDevelopment = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleVisible = useOnScreen(titleRef);

  const firstSeparatorRef = useRef<HTMLDivElement>(null);
  const isFirstSeparatorVisible = useOnScreen(firstSeparatorRef);

  const textRef = useRef<HTMLParagraphElement>(null);
  const isTextVisible = useOnScreen(textRef);

  const textSeparatorRef = useRef<HTMLDivElement>(null);
  const isTextSeparatorVisible = useOnScreen(textSeparatorRef);

  const imagesRef = useRef<HTMLDivElement>(null);
  const isImagesVisible = useOnScreen(imagesRef);

  const lastSeparatorRef = useRef<HTMLDivElement>(null);
  const isLastSeparatorVisible = useOnScreen(lastSeparatorRef);

  const circleRef = useRef<HTMLSpanElement>(null);
  const isCircleVisible = useOnScreen(circleRef);

  return (
    <div className="relative h-[46rem] w-full max-w-[340px]">
      <h3
        ref={titleRef}
        className={cn(
          "animate-fade-down animate-duration-[1500ms] absolute inset-0 -inset-x-12 w-96 h-10 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !isTitleVisible,
            running: isTitleVisible,
          }
        )}>
        Web-development
      </h3>
      <Separator
        ref={firstSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-[3.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[700ms] fill-mode-forwards bg-onyx",
          {
            paused: !isFirstSeparatorVisible,
            running: isFirstSeparatorVisible,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "2.5rem",
        }}
      />
      <p
        ref={textRef}
        className={cn(
          "animate-fade-down animate-duration-[1500ms] animate-delay-[300ms] animate-ease-in-out absolute inset-y-24 text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx",
          {
            paused: !isTextVisible,
            running: isTextVisible,
          }
        )}>
        Transitioning, I immersed myself in web development, powered by Python.
        Guided by Django and Flask frameworks, I sculpted web applications,
        combining functionality and aesthetics seamlessly.
      </p>
      <Separator
        ref={textSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-[30rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[1000ms] fill-mode-forwards bg-onyx",
          {
            paused: !isTextSeparatorVisible,
            running: isTextSeparatorVisible,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "2.5rem",
        }}
      />
      <div
        ref={imagesRef}
        className="absolute -right-10 inset-y-[35rem] flex items-center justify-center space-x-3 rounded-lg shadow-sm">
        <Icons.python className="fill-white" />
        <Icons.plus
          className={cn(
            "animate-plus-appearance animate-duration-[800ms] animate-delay-[1000ms] animate-ease-out fill-mode-forwards",
            {
              paused: !isImagesVisible,
              running: isImagesVisible,
            }
          )}
          stroke="#424241"
          size={60}
          style={{ scale: 0 }}
        />
        <div
          className={cn(
            "animate-fade-up animate-delay-[1300ms] animate-ease-out flex items-center justify-center space-x-2",
            {
              paused: !isImagesVisible,
              running: isImagesVisible,
            }
          )}>
          <Icons.django />
          <p className="text-4xl font-semibold text-onyx">/</p>
          <Icons.flask />
        </div>
        <div
          className={cn(
            "animate-bg-appearance animate-duration-[1000ms] animate-delay-[700ms] fill-mode-forwards z-[-1] absolute -inset-x-24 -inset-y-[6rem] w-[150px] h-[200px] bg-ruddy-blue rounded-2xl",
            {
              paused: !isImagesVisible,
              running: isImagesVisible,
            }
          )}
          style={{ scale: 0, "--rotation": "rotate(-65deg)" }}
        />
      </div>
      <Separator
        ref={lastSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-[37.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[1000ms] fill-mode-forwards bg-onyx",
          {
            paused: !isLastSeparatorVisible,
            running: isLastSeparatorVisible,
          }
        )}
        orientation="vertical"
        style={{
          "--line-height": "8rem",
        }}
      />
      <span
        ref={circleRef}
        className={cn(
          "animate-scale-in animate-duration-[700ms] animate-delay-[1500ms] fill-mode-forwards inset-y-[45rem] inset-x-[8.225rem] w-6 h-6 rounded-full absolute bg-onyx",
          {
            paused: !isCircleVisible,
            running: isCircleVisible,
          }
        )}
        style={{ scale: 0 }}
      />
    </div>
  );
};

export default WebDevelopment;
