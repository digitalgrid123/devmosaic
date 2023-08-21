import React, { useState } from "react";
import project1 from "../Assets/Images/project1.png";
import project2 from "../Assets/Images/project2.png";
import project3 from "../Assets/Images/project3.png";

const projectImages = [project1, project2, project3, project1, project2];
const initialProjectsToShow = 3;

const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const handleToggleClick = () => {
    if (showMore) {
      setProjectsToShow(initialProjectsToShow);
    } else {
      setProjectsToShow(projectImages.length);
    }
    setShowMore(!showMore);
  };

  return (
    <section id="work">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2 className="personal_heading bold">Personal Projects</h2>
            <div className="row">
              {projectImages.slice(0, projectsToShow).map((project, index) => (
                <div
                  className={`col-lg-4 project-item ${
                    showMore ? "fade-in-up scale-in" : ""
                  }`}
                  key={index}
                >
                  <img
                    className={`padding_project ${showMore ? "show" : "hide"}`}
                    src={project}
                    alt="project"
                    loading="lazy"
                  />
                </div>
              ))}
              <button className="more_btn" onClick={handleToggleClick}>
                {showMore ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
