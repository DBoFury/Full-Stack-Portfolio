const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-8 overflow-x-clip">
      <div className="z-0 absolute w-[400px] h-[300px] bg-no-repeat bg-contain top-0 left-10 bg-photo-mobile-back" />
      <div className="z-10 rounded-full w-[260px] h-[260px] bg-white"></div>

      <div className="px-8 pt-5">
        <h2 className="text-5xl font-bold text-center text-pine-green">
          Full-Stack Developer
        </h2>
        <p className="pt-4 text-center text-onyx text-2xl leading-[165%]">
          Greetings! I'm Oleg Didechkin, a dedicated and imaginative
          web-developer with a rich array of expertise and a passion for
          crafting digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
