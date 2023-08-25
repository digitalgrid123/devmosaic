import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import project1 from "../../Assets/Images/project1.png";
import project2 from "../../Assets/Images/project2.png";
import project3 from "../../Assets/Images/project3.png";

const Project = ({ project_img }) => {
  const { projectId } = useParams();

  const projectImages = [project1, project2, project3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projectImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProjectImage = projectImages[currentImageIndex];

  return (
    <section className="project">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="display_center">
              <div className="col-lg-8">
                <h1 className="landing_heading bold">Project Title</h1>
                <p className="landing_paragraph semiBold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus et ab, fuga id minima cum dolorum numquam, quae
                  magnam quia facilis laborum totam fugiat illum, porro harum
                  dolore dolorem veniam.
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
                <img
                  src={currentProjectImage}
                  alt="project"
                  className="project-image-transition"
                />
                <div className="carousel-indicators">
                  {projectImages.map((_, index) => (
                    <div
                      key={index}
                      className={`carousel-indicator ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
