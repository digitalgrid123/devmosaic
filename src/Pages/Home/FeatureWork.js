import React from "react";
import arrow from "../../Assets/Images/arrow-1.svg";
import feature1 from "../../Assets/Images/feature1.png";
import feature2 from "../../Assets/Images/feature2.png";
import feature3 from "../../Assets/Images/feature3.png";
import feature4 from "../../Assets/Images/feature4.png";

function FeatureWork() {
  const features = [
    { img: feature1, text: "Feature 1 Text" },
    { img: feature2, text: "Feature 2 Text" },
    { img: feature3, text: "Feature 3 Text" },
    { img: feature4, text: "Feature 4 Text" },
  ];

  return (
    <section>
      <div className="container-fluid">
        <div className="col-lg-10 offset-lg-1">
          <div className="arrow_box">
            <img className="arrow_img" src={arrow} alt="arrow" loading="lazy" />
            <h2 className="feature_heading bold">Feature Work</h2>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-6" key={index}>
                <div className="feature-container">
                  <div
                    className={`image-wrapper ${
                      index === 1 ? "feature2-margin" : ""
                    }`}
                  >
                    <img
                      src={feature.img}
                      alt={`feature_img_${index}`}
                      loading="lazy"
                    />
                    <div className="overlay">
                      <p className="overlay-text bold">{feature.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureWork;
