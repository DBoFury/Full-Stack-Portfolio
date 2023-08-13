import DataScience from "./DataScience";
import WebDevelopment from "./WebDevelopment";
import FullStack from "./FullStack";

const AboutMobile = () => {
  return (
    <div className="pt-24">
      <h2 className="text-6xl font-semibold text-center text-pine-green">
        About Me
      </h2>
      <div className="flex flex-col items-center justify-center pt-16">
        <DataScience />
        <WebDevelopment />
        <FullStack />
      </div>
    </div>
  );
};

export default AboutMobile;
