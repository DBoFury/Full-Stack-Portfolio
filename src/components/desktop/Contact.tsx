import Link from "next/link";
import { Icons } from "../Icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-start section overflow-clip">
      <div className="z-[-1] absolute top-20 -left-56 w-[22rem] h-[22rem] bg-ruddy-blue rounded-2xl rotate-45" />
      <div className="z-[-1] absolute -bottom-80 -right-20 w-[32rem] h-[32rem] bg-ruddy-blue rounded-2xl rotate-12 dt:right-0" />

      <h2 className="absolute text-6xl font-bold cursor-default top-36 dt:top-44 text-pine-green">
        Contact Me
      </h2>
      <div className="flex flex-col items-start justify-center flex-1 pt-20 space-y-8 dt:space-x-12 dt:flex-row dt:space-y-0 dt:pt-0 dt:items-center">
        <Link
          className="flex items-center justify-center space-x-6 group"
          href="https://www.linkedin.com/in/oleg-didechkin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile">
          <Icons.linkedin className="w-32 h-32 transition-all ease-out group-hover:-translate-y-6" />
          <span className="font-semibold text-7xl text-onyx">LinkedIn</span>
        </Link>

        <Link
          className="flex items-center justify-center space-x-6 group"
          href="https://t.me/golovakanta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram contact">
          <Icons.telegram className="w-32 h-32 transition-all ease-out group-hover:-translate-y-6" />
          <span className="font-semibold text-7xl text-onyx">Telegram</span>
        </Link>

        <Link
          className="flex items-center justify-center space-x-6 group"
          href="mailto:oleg.didechkin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email">
          <Icons.email className="w-32 h-32 transition-all ease-out group-hover:-translate-y-6" />
          <span className="font-semibold text-7xl text-onyx">Email</span>
        </Link>
      </div>
      <span className="absolute text-xl font-semibold -translate-x-1/2 cursor-default bottom-2 left-1/2 text-battleship-gray">
        Oleg Didechkin 2023
      </span>
    </div>
  );
};

export default Contact;
