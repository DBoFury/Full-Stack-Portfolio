import Link from "next/link";
import { Icons } from "../Icons";

const ContactMobile = () => {
  return (
    <div className="h-[110vh] pt-36 flex items-center flex-col overflow-x-clip">
      <h2 className="text-6xl font-semibold text-center text-pine-green">
        Contact Me
      </h2>

      <div className="flex items-center justify-center flex-grow w-full">
        <div className="flex flex-col items-center space-x-0 space-y-7 mb:flex-row mb:space-y-0 mb:space-x-10">
          <Link
            className="group"
            href="https://www.linkedin.com/in/oleg-didechkin/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="group">
              <Icons.linkedin className="focus:outline-none group-hover:scale-90" />
            </div>
          </Link>
          <Link
            className="group"
            href="https://t.me/golovakanta"
            target="_blank"
            rel="noopener noreferrer">
            <div className="group">
              <Icons.telegram className="focus:outline-none group-hover:scale-90" />
            </div>
          </Link>
          <Link
            href="mailto:oleg.didechkin@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <div className="group">
              <Icons.email className="focus:outline-none group-hover:scale-90" />
            </div>
          </Link>
        </div>
      </div>

      <span className="absolute w-full text-xl font-semibold text-center bottom-2 text-battleship-gray">
        Oleg Didechkin 2023
      </span>
    </div>
  );
};

export default ContactMobile;
