import React from "react";
import "./App.css";
import Landing from "./Component/Landing";
import FeatureWork from "./Component/FeatureWork";

import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <FeatureWork />
      <Project />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
