import React from "react";
import whatsapp from "../Assets/Images/whatsapp.svg";
import behance from "../Assets/Images/behance.svg";
import linkedin from "../Assets/Images/linkedin.svg";
import twitter from "../Assets/Images/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="space_between">
              <h2 className="copyright_heading semiBold">
                Made by <span className="color_white Bold"> Harris </span>
                -Copyright 2023
              </h2>
              <div className="social_box">
                <a href="#">
                  <img
                    className="social_icon"
                    src={whatsapp}
                    alt="social_icon"
                  />
                </a>
                <a href="#">
                  <img
                    className="social_icon"
                    src={behance}
                    alt="social_icon"
                  />
                </a>
                <a href="#">
                  <img
                    className="social_icon"
                    src={linkedin}
                    alt="social_icon"
                  />
                </a>
                <a href="#">
                  <img
                    className="social_icon"
                    src={twitter}
                    alt="social_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
