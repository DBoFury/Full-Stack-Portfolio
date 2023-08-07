import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Second = () => {
  return (
    <div className="relative z-0 flex flex-col items-center justify-start w-full h-screen px-10 space-y-24 pt-44 overflow-x-clip dt:space-y-12 dt:pt-28">
      <div className="flex items-center justify-center space-x-20 dt:space-x-32">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-10">
            <h2 className="text-[1.6rem] font-semibold text-pine-green dt:text-[2.8rem]">
              Bellify
            </h2>
            <Link
              href="https://bellify.org/"
              target="_blank"
              rel="noopener noreferrer">
              <Button className="text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
                Preview
              </Button>
            </Link>
          </div>
          <p className="text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem]">
            Telegram bot project – a user-centered hub for tracking preferred
            YouTube and Twitch channels. Receive instant notifications for new
            content while benefiting from commerce practices like user
            agreements, tutorials, and plan upgrades, with payments via Stripe
            for a seamless experience.
          </p>
        </div>
        <div className="relative">
          <Image
            className="shadow-lg rounded-xl"
            src="/Full-Stack-Portfolio/Project 3.png"
            alt="Project 3 image"
            width={300}
            height={200}
          />
          <div className="absolute z-[-1] bg-no-repeat bg-contain bg-project-3 -bottom-16 -right-24 w-80 h-80" />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 dt:space-x-20">
        <div className="relative">
          <Image
            className="rounded-lg"
            src="/Full-Stack-Portfolio/Project 4.png"
            alt="Project 4 image"
            width={420}
            height={300}
          />
          <div className="absolute z-[-1] bg-no-repeat bg-contain bg-project-4 -top-20 -left-24 w-64 h-64" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-10">
            <Link
              href="https://github.com/DBoFury/DinoNN"
              target="_blank"
              rel="noopener noreferrer">
              <Button className="text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
                Repository
              </Button>
            </Link>
            <h2 className="text-[1.6rem] dt:text-[2.5rem] font-semibold text-pine-green">
              DinoNN
            </h2>
          </div>
          <p className="text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem]">
            Python script that launches a Chrome browser, generates multiple
            agents (neural networks) to compete for top scores in Dino game,
            identifies the most successful agent, and mutates its genes to spawn
            a new generation of agents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
