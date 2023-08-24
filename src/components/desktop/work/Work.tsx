import { projects } from '@/helpers/data';

import FirstWorkSection from './FirstWorkSection';
import SecondWorkSection from './SecondWorkSection';

const Work = () => {
  return (
    <>
      <FirstWorkSection projects={projects.slice(0, 2)} />
      <SecondWorkSection projects={projects.slice(2)} />
    </>
  );
};

export default Work;
