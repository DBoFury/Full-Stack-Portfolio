import DataScience from './DataScience';
import FullStack from './FullStack';
import WebDevelopment from './WebDevelopment';

import { about } from '@/helpers/data';

const About = () => {
  return (
    <>
      <DataScience about={about[0]} />
      <WebDevelopment about={about[1]} />
      <FullStack about={about[2]} />
    </>
  );
};

export default About;
