"use client";

import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useOnScreen from "@/hooks/useOnScreen";

const DataScience = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleVisible = useOnScreen(titleRef);

  const circleRef = useRef<HTMLSpanElement>(null);
  const isCircleVisible = useOnScreen(circleRef);

  const firstSeparatorRef = useRef<HTMLDivElement>(null);
  const isFirstSeparatorVisible = useOnScreen(firstSeparatorRef);

  const imagesRef = useRef<HTMLDivElement>(null);
  const isImagesVisible = useOnScreen(imagesRef, 0.5);

  const textSeparatorRef = useRef<HTMLDivElement>(null);
  const isTextSeparatorVisible = useOnScreen(textSeparatorRef);

  const textRef = useRef<HTMLParagraphElement>(null);
  const isTextVisible = useOnScreen(textRef);

  const lastSeparatorRef = useRef<HTMLDivElement>(null);
  const isLastSeparatorVisible = useOnScreen(lastSeparatorRef);

  return (
    <div className="relative h-[56rem] w-full max-w-[340px]">
      <h3
        ref={titleRef}
        className={cn(
          "animate-fade-up animate-duration-[2000ms] h-40 absolute inset-0 text-4xl italic font-medium text-center text-onyx",
          {
            paused: !isTitleVisible,
            running: isTitleVisible,
          }
        )}>
        Data Science
      </h3>
      <span
        ref={circleRef}
        className={cn(
          "animate-scale-in animate-duration-[700ms] animate-delay-[700ms] fill-mode-forwards inset-y-16 inset-x-[8.225rem] w-6 h-6 rounded-full absolute bg-onyx",
          { paused: !isCircleVisible, running: isCircleVisible }
        )}
        style={{ scale: 0 }}
      />
      <Separator
        ref={firstSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-20 w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[900ms] fill-mode-forwards bg-onyx",
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
      <div ref={imagesRef} className="absolute inset-y-[8.75rem] -inset-x-6">
        <Image
          className={cn(
            "animate-scale-in animate-duration-[1000ms] animate-delay-[700ms] fill-mode-forwards p-6 ml-24 rounded-lg shadow-md bg-gray-50",
            {
              paused: !isImagesVisible,
              running: isImagesVisible,
            }
          )}
          src="/DS.webp"
          alt="Data Science Illustration"
          width={460}
          height={400}
          style={{ scale: 0 }}
        />
        <div
          className={cn(
            "animate-bg-appearance animate-duration-[1000ms] animate-delay-[1000ms] fill-mode-forwards z-[-1] absolute inset-x-56 -inset-y-2 w-[320px] h-[320px] rounded-2xl bg-ruddy-blue",
            {
              paused: !isImagesVisible,
              running: isImagesVisible,
            }
          )}
          style={{ scale: 0, "--rotation": "rotate(-45deg)" }}
        />
      </div>
      <Separator
        ref={textSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-[28.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1500ms] animate-delay-[1000ms] fill-mode-forwards bg-onyx",
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
      <p
        ref={textRef}
        className={cn(
          "animate-fade-down animate-duration-[1000ms] animate-delay-[700ms] animate-ease-in-out absolute inset-y-[31rem] h-80 text-2xl leading-[150%] italic text-center max-w-[340px] text-onyx",
          {
            paused: !isTextVisible,
            running: isTextVisible,
          }
        )}>
        My expedition as a software developer commenced with the elegant
        language of Python. This initial foray into the realm of Data Science
        set the foundation for my evolving voyage.
      </p>
      <Separator
        ref={lastSeparatorRef}
        className={cn(
          "absolute inset-x-[50%] inset-y-[52.5rem] w-1 h-0 animate-grow-line-vertical animate-duration-[1000ms] animate-delay-[700ms] fill-mode-forwards bg-onyx",
          {
            paused: !isLastSeparatorVisible,
            running: isLastSeparatorVisible,
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
