import DataScience from './DataScience';
import FullStack from './FullStack';
import WebDevelopment from './WebDevelopment';

import { about } from '@/helpers/data';

const AboutMobile = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-3 pt-24'>
      <h2 className='text-5xl font-semibold text-center cursor-default text-pine-green'>
        About Me
      </h2>
      <DataScience about={about[0]} />
      <WebDevelopment about={about[1]} />
      <FullStack about={about[2]} />
    </section>
  );
};

export default AboutMobile;
