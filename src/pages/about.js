import * as React from "react";
import { useStaticQuery } from "gatsby";
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
      <main className="custom-gradient pb-24 text-white">
        <title>About Me</title>
        <div>
          <h1 className="header-text mb-3 pt-24 text-center text-5xl font-bold lg:text-7xl">
            About Me
          </h1>
          <article
            className="prose lg:prose-xl prose-invert relative m-3 mx-auto mt-16 h-fit w-5/6 max-w-none rounded-xl bg-slate-900 p-6 shadow-2xl shadow-blue-500/50 xl:w-3/4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
};

export default AboutMe;
