import React, { useState } from "react";
import project1 from "../../Assets/Images/project1.png";
import project2 from "../../Assets/Images/project2.png";
import project3 from "../../Assets/Images/project3.png";
import { Link } from "react-router-dom";

const projectImages = [
  { img: project1, text: "Project 1 Text" },
  { img: project2, text: "Project 2 Text" },
  { img: project3, text: "Project 3 Text" },
  { img: project1, text: "Project 4 Text" },
  { img: project2, text: "Project 5 Text" },
];

const initialProjectsToShow = 3;

const Project = ({ project }) => {
  const [showMore, setShowMore] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const handleToggleClick = () => {
    if (showMore) {
      setProjectsToShow(initialProjectsToShow);
    } else {
      setProjectsToShow(project.length);
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
              {project.slice(0, projectsToShow).map((projectData, index) => {
                return (
                  <div className="col-lg-4 project-item" key={index}>
                    <div className="project-container">
                      <Link to={`/project/${projectData.uid}`}>
                        <img
                          src={projectData?.data?.project_img[0]?.image?.url}
                          alt={`project_${index}`}
                          loading="lazy"
                        />
                        <div className="overlay">
                          <p className="overlay-text">
                            {projectData?.data?.project_title[0]?.text}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-12">
                <button className="more_btn" onClick={handleToggleClick}>
                  {showMore ? "Less" : "More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
