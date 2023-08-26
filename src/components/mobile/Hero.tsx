const HeroMobile = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full pt-8 overflow-x-clip'>
      <div className='relative'>
        <div className='z-[-1] absolute -inset-x-6 -inset-y-10 w-[415px] h-[300px] bg-ruddy-blue rounded-[50%] rotate-[-20deg] dark:bg-ruddy-blue/70' />
        <div className='rounded-full w-[260px] h-[260px] bg-oleg-d bg-cover bg-no-repeat bg-center' />
      </div>

      <div className='px-8 pt-5'>
        <h2 className='text-4xl font-bold text-center cursor-default text-pine-green dark:drop-shadow-sm'>
          Full-Stack Developer
        </h2>
        <p className='pt-4 text-center text-onyx text-xl leading-[165%] cursor-default transition-colors dark:text-slate-300'>
          Greetings! I'm Oleg Didechkin, a dedicated and imaginative
          web-developer with a rich array of expertise and a passion for
          crafting digital experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroMobile;
