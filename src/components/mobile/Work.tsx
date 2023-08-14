import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WorkMobile = () => {
  return (
    <div className="pt-24 overflow-x-clip">
      <h2 className="text-6xl font-semibold text-center text-pine-green">
        Work
      </h2>

      <div className="flex flex-col items-center justify-center pt-10">
        <div className="relative">
          <Image
            className="px-10 shadow-md bg-gray-50 rounded-xl"
            src="/Project-1.webp"
            alt="Project 1 image"
            width={340}
            height={200}
            loading="eager"
          />
          <div className="z-[-1] absolute inset-x-64 inset-y-16 w-[200px] h-[140px] bg-ruddy-blue rounded-2xl -rotate-12" />
        </div>

        <h3 className="px-24 pt-10 text-4xl font-semibold text-center text-pine-green">
          Frontend Mentor Challenges
        </h3>
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          A collection of Frontend Mentor tasks I've solved and deployed on
          GitHub Pages. Utilizing the Next router, I've harmoniously integrated
          all pages into one cohesive website, dedicating a unique page to each
          solution. Dive into this exhibit of my technical skills and creative
          design.
        </p>
        <Link
          className="mt-10"
          href="https://olacdy.github.io/frontend-mentor-challenges/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review first project">
          <Button
            aria-label="Review first project"
            className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Review
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            src="/Project-2.webp"
            alt="Project 2 image"
            width={320}
            height={200}
            loading="eager"
          />
          <div className="z-[-1] absolute -inset-x-36 w-52 h-32 -inset-y-10 bg-ruddy-blue rounded-2xl rotate-12" />
        </div>
        <h3 className="px-24 pt-10 text-4xl font-semibold text-center text-pine-green">
          Interactive Comments Section
        </h3>
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          All-encompassing full-stack web application empowering users to
          create, edit, and delete diverse comments within a unified global
          comments section. Account creation is a prerequisite for accessing
          this feature-rich platform. Originally initiated as a Frontend Mentor
          task, I expanded its scope to develop a comprehensive web application.
        </p>
        <Link
          className="mt-10"
          href="https://interactive-comments-section-mocha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review second project">
          <Button
            aria-label="Review second project"
            className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Review
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            className="shadow-md rounded-xl"
            src="/Project-3.webp"
            alt="Project 3 image"
            width={320}
            height={300}
            loading="eager"
          />
          <div className="z-[-1] absolute inset-x-6 -inset-y-10 w-64 h-40 bg-ruddy-blue rounded-2xl rotate-12" />
        </div>
        <h3 className="px-24 pt-10 text-4xl font-semibold text-center text-pine-green">
          Bellify
        </h3>
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          Telegram bot project – a user-centered hub for tracking preferred
          YouTube and Twitch channels. Receive instant notifications for new
          content while benefiting from commerce practices like user agreements,
          tutorials, and plan upgrades, with payments via Stripe for a seamless
          experience.
        </p>
        <Link
          className="mt-10"
          href="http://bellify.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Review third project">
          <Button
            aria-label="Review third project"
            className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Review
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            src="/Project-4.webp"
            alt="Project 4 image"
            width={460}
            height={300}
            loading="eager"
          />
          <div className="z-[-1] absolute inset-x-20 -inset-y-20 w-[300px] h-[200px] bg-ruddy-blue rounded-2xl rotate-12" />
        </div>
        <h3 className="px-24 pt-10 text-4xl font-semibold text-center text-pine-green">
          DynoNN
        </h3>
        <p className="text-2xl leading-[150%] pt-3 italic text-center max-w-[340px] text-onyx">
          Python script that launches a Chrome browser, generates multiple
          agents (neural networks) to compete for top scores in Dino game,
          identifies the most successful agent, and mutates its genes to spawn a
          new generation of agents.
        </p>
        <Link
          className="mt-10"
          href="https://github.com/Olacdy/DinoNN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repository of fourth project">
          <Button
            aria-label="Repository of fourth project"
            className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Repository
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkMobile;
