import React, { useEffect, useState } from "react";
import mail from "../Assets/Images/mail.svg";
import profile from "../Assets/Images/banner_img.png";

function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="display_center">
              <div className="col-lg-6">
                <h1 className="landing_heading bold">
                  Hey, I'm Harris – Frontend Enthusiast, Creating Digital Magic.
                </h1>
                <p className="landing_paragraph semiBold">
                  In the world of frontend development, I partner with
                  businesses and companies to create user-centric digital
                  products and interactive experiences. By combining design and
                  technology, I help achieve their goals, crafting interfaces
                  that captivate and engage.
                </p>
                <button className="contact_btn">
                  <a className="mail_link" href="mailto:m.bluth@example.com">
                    <img
                      className="mail_icon"
                      src={mail}
                      alt="mail_button"
                      loading="lazy"
                    />
                    m.bluth@example.com
                  </a>
                </button>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="positionRelative">
                  <img src={profile} alt="profile" loading="lazy" />
                  <div className="triangle_container">
                    <div
                      className={`gg-shape-triangle ${
                        isVisible ? "visible" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
