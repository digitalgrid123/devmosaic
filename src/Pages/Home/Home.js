import React from "react";
import Landing from "./Landing";
import FeatureWork from "./FeatureWork";
import Project from "./Project";
import Contact from "./Contact";

function Home({ document }) {
  return (
    <>
      <Landing document={document} />
      <FeatureWork />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
