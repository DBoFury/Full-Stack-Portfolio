import Header from "@/components/desktop/Header";
import Hero from "@/components/desktop/Hero";
import About from "@/components/desktop/about/About";
import Projects from "@/components/desktop/projects/Projects";
import Contact from "@/components/desktop/Contact";
import ScrollFooter from "@/components/desktop/ScrollFooter";

const Desktop = () => {
  return (
    <main
      className="relative flex-col items-center justify-between hidden w-full lg:flex"
      style={{ scrollSnapType: "y mandatory" }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollFooter />
    </main>
  );
};

export default Desktop;
