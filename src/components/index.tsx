import PortfolioWork from "./portfolio-work/index";
import { projects } from "../projects/projectList";
import { About } from "./about";
import { Contact } from "./contact";

const PortfolioPage = () => {
  return (
    <>
      <div>
        <About />
      </div>
      <div>
        <PortfolioWork projectItems={projects} />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default PortfolioPage;
