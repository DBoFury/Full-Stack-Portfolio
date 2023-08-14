import AboutMobile from "@/components/mobile/about/About";
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
    </main>
  );
};

export default Mobile;
