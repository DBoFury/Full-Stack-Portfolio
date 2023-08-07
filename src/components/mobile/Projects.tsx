import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProjectsMobile = () => {
  return (
    <div className="pt-24 overflow-x-clip">
      <h2 className="text-6xl font-semibold text-center text-pine-green">
        Projects
      </h2>

      <div className="flex flex-col items-center justify-center pt-10">
        <div className="relative">
          <Image
            className="px-10 shadow-sm bg-gray-50 rounded-xl"
            src="/Full-Stack-Portfolio/Project 1.svg"
            alt="Project 1 image"
            width={340}
            height={200}
          />
          <div className="z-[-1] absolute inset-x-64 inset-y-16 w-[200px] h-full bg-no-repeat bg-contain bg-mobile-project-1" />
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
          href="https://dbofury.github.io/frontend-mentor-challenges/"
          target="_blank"
          rel="noopener noreferrer">
          <Button className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Preview
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            src="/Full-Stack-Portfolio/Project 2.png"
            alt="Project 2 image"
            width={320}
            height={200}
          />
          <div className="z-[-1] absolute -inset-x-32 w-64 h-40 bg-contain -inset-y-10 bg-no-repeat bg-mobile-project-2" />
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
          rel="noopener noreferrer">
          <Button className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Preview
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            className="shadow-sm rounded-xl"
            src="/Full-Stack-Portfolio/Project 3.png"
            alt="Project 3 image"
            width={320}
            height={300}
          />
          <div className="z-[-1] absolute inset-x-6 -inset-y-16 w-72 h-72 bg-no-repeat bg-contain bg-mobile-project-3" />
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
          rel="noopener noreferrer">
          <Button className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Preview
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <div className="relative">
          <Image
            src="/Full-Stack-Portfolio/Project 4.png"
            alt="Project 4 image"
            width={460}
            height={300}
          />
          <div className="z-[-1] absolute inset-x-20 -inset-y-28 w-[300px] h-full bg-no-repeat bg-contain bg-mobile-project-4" />
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
          href="https://github.com/DBoFury/DinoNN"
          target="_blank"
          rel="noopener noreferrer">
          <Button className="text-3xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
            Repository
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsMobile;
