import AboutMobile from "@/components/mobile/About";
import ContactMobile from "@/components/mobile/Contact";
import HeaderMobile from "@/components/mobile/Header";
import HeroMobile from "@/components/mobile/Hero";
import WorkMobile from "@/components/mobile/Work";
import SkillsMobile from "@/components/mobile/Skills";

const Mobile = () => {
  return (
    <main className="relative flex flex-col items-center justify-between w-full lg:hidden overflow-x-clip">
      <HeaderMobile />
      <HeroMobile />
      <SkillsMobile />
      <AboutMobile />
      <WorkMobile />
      <ContactMobile />
      <div className="z-[-1] absolute bottom-[26rem] -left-36 w-80 h-72 bg-no-repeat bg-contain bg-mobile-contact-1" />
      <div className="z-[-1] absolute bottom-16 -right-48 w-72 h-64 bg-no-repeat bg-contain bg-mobile-contact-2" />
    </main>
  );
};

export default Mobile;
