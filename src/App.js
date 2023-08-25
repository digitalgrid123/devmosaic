import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import PreMainContent from "./Common/PreMainContent";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "../src/Pages/Project/Project";

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
  const [document] = useAllPrismicDocumentsByType("profile");

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loader">
          <div className="loader-spinner" />
        </div>
      ) : (
        <React.Fragment>
          {showMain ? (
            <>
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Home document={document} />} />
                  <Route path="/project/:projectId" element={<Project />} />
                </Routes>
                <Footer />
              </Router>
            </>
          ) : (
            <PreMainContent showMainContent={handleShowMain} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
