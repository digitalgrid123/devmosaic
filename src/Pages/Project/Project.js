import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { usePrismicDocumentByUID } from "@prismicio/react";
import back from "../../Assets/Images/icons8-back .gif";

const Project = () => {
  const { projectId } = useParams();
  const [document] = usePrismicDocumentByUID("project", `${projectId}`);

  const projectImages = document?.data.project_img || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projectImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projectImages]);

  const currentProjectImage = projectImages[currentImageIndex]?.image.url;

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <section className="project">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <button className="back-button" onClick={handleButtonClick}>
              <img src={back} alt="back-icon" className="back-icon" />
              <span>Back</span>
            </button>
            <div className="display_center reverse">
              <div className="col-lg-8">
                <h1 className="landing_heading bold">
                  {document?.data?.project_title[0]?.text}
                </h1>
                <p className="landing_paragraph semiBold">
                  {document?.data?.project_paragraph[0]?.text}
                </p>
                <div className="skill">
                  <a
                    className="skill_name"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?q=HTML"
                  >
                    HTML
                  </a>
                  <a
                    className="skill_name"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?q=CSS"
                  >
                    CSS
                  </a>
                  <a
                    className="skill_name"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?q=Javascript"
                  >
                    Javascript
                  </a>
                  <a
                    className="skill_name"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?q=React"
                  >
                    React
                  </a>
                </div>
              </div>

              <div className="col-lg-4 project-image">
                <div className="project-image-container">
                  <img
                    src={currentProjectImage}
                    alt="project"
                    className="project-image-transition"
                  />
                </div>
                {projectImages.length > 1 && (
                  <div className="carousel-indicators">
                    {projectImages.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`carousel-indicator ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
