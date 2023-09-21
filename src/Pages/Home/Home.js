import React from "react";
import Landing from "./Landing";
import FeatureWork from "./FeatureWork";
import Project from "./Project";
import Contact from "./Contact";

function Home({ document, project }) {
  return (
    <>
      <Landing document={document} />
      <FeatureWork />
      <Project project={project} />
      <Contact />
    </>
  );
}

export default Home;
