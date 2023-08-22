import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Component/Landing";
import FeatureWork from "./Component/FeatureWork";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import PreMainContent from "./Common/PreMainContent";
import {
  useSinglePrismicDocument,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [hidePreMain, setHidePreMain] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleShowMain = () => {
    setHidePreMain(true);
    setTimeout(() => {
      setShowMain(true);
    }, 1000);
  };
  const [document] = useSinglePrismicDocument("profile");
  console.log(document);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loader">
          <div className="loader-spinner" />
        </div>
      ) : (
        <React.Fragment>
          {showMain ? (
            <React.Fragment>
              <Header />
              <Landing />
              <FeatureWork />
              <Project />
              <Contact />
              <Footer />
            </React.Fragment>
          ) : (
            <PreMainContent showMainContent={handleShowMain} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
