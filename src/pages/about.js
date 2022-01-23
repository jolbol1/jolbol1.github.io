import * as React from "react";
import { useStaticQuery } from "gatsby";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { graphql } from "gatsby";
import showdown from "showdown";
import SEO from "../components/SEO/SEO";

// markup
const AboutMe = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              repository {
                object {
                  text
                }
              }
            }
          }
        }
      }
    `
  );

  const readme = data.allGithubData.nodes[0].data.repository.object.text;

  var converter = new showdown.Converter(),
    html = converter.makeHtml(readme);

  return (
    <>
      <SEO />
      <ParticlesContainer></ParticlesContainer>
      <main className="text-white custom-gradient pb-16">
        <title>About Me</title>
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold header-text mb-3 text-center pt-24">
            About Me
          </h1>
          <article
            className="relative prose lg:prose-xl prose-invert w-5/6 xl:w-3/4 max-w-none mx-auto m-3 shadow-blue-500/50 shadow-2xl bg-slate-900 rounded-xl h-fit mt-16 p-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
};

export default AboutMe;
