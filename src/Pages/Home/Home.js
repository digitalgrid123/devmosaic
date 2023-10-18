import React, { useEffect } from "react";
import Landing from "./Landing";
import FeatureWork from "./FeatureWork";
import Project from "./Project";
import Contact from "./Contact";
import { useLocation } from "react-router";

function Home({ document, project }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
