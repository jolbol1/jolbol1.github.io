import * as React from "react";
import { IntroHero } from "../components/IntroHero";
import { ProjectTree } from "../components/ProjectTree";
import { ScrollChevron } from "../components/scrollChevron";
import { SectionHeading } from "../components/SectionHeading";
import SEO from "../components/SEO/SEO";
import { SkillsComponent } from "../components/SkillsComponent";
import { TextContainer } from "../components/TextContainer";
// markup

const IndexPage = () => {
  return (
    <>
      <SEO />
      <main className="pb-12 text-white">
        <title>Home Page</title>

        {/* Section One */}
        <div className="custom-gradient relative flex min-h-screen flex-col justify-between">
          <IntroHero />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#385170"
              fill-opacity="1"
              d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <ScrollChevron scrollToId={"About"} />
        </div>
        <div
          className="relative z-0 min-h-screen"
          style={{ backgroundColor: "#385170" }}
        >
          <div className="pt-6">
            <SectionHeading text="About Me" id="About" />
          </div>
          <div className=" z-20 mt-6 mb-0 flex flex-col content-center items-center justify-center justify-items-center gap-y-6 p-3 pb-48 md:mx-6 xl:flex-row xl:p-6 2xl:m-12 2xl:mb-0 2xl:p-12">
            <TextContainer />
            <SkillsComponent />
          </div>
          <svg
            className="-z-10"
            style={{ position: "absolute", bottom: "0" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#000"
              fill-opacity="1"
              d="M0,256L60,224C120,192,240,128,360,138.7C480,149,600,235,720,256C840,277,960,235,1080,218.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <ScrollChevron scrollToId={"Projects"} />
        </div>

        <div className="h-fit min-h-screen bg-black">
          <br />
          <div className="pt-6">
            <SectionHeading text="Git Projects" id="Projects" />
          </div>
          <div className="flex content-center items-start justify-center justify-items-start pt-3 md:pt-12">
            <ProjectTree />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
