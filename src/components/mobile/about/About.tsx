import DataScience from './DataScience';
import FullStack from './FullStack';
import WebDevelopment from './WebDevelopment';

const AboutMobile = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-3 pt-24'>
      <h2 className='text-6xl font-semibold text-center text-pine-green'>
        About Me
      </h2>
      <DataScience />
      <WebDevelopment />
      <FullStack />
    </section>
  );
};

export default AboutMobile;
