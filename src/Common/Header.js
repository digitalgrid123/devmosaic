import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/icon.svg";
import { Link, useLocation } from "react-router-dom";
import menu from "../Assets/Images/Menu.svg";
import del from "../Assets/Images/Delete.svg";
import resume from "../Assets/Resume/Cv-haris.pdf";

function Header() {
  const location = useLocation();
  const isProjectRoute = location.pathname.startsWith("/project/");
  const handleWorkLinkClick = (event) => {
    event.preventDefault();
    setMenuVisible(false);

    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "your-resume.pdf");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <nav className="space_between ">
                <Link to="/">
                  <img src={logo} alt="logo_icon" />
                </Link>
                <button
                  className={`toggle-button ${
                    isProjectRoute ? "hidden" : "appear"
                  }`}
                  onClick={toggleMenu}
                >
                  <img className="menu-icon" src={menu} alt="menu-icon" />
                </button>

                <ul className="navbar-links">
                  <li>
                    <a
                      className="nav-link bold heading active"
                      aria-current="page"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link bold heading"
                      href="#work"
                      onClick={handleWorkLinkClick}
                    >
                      Work
                    </a>
                  </li>
                  <li>
                    <a className="nav-link bold  heading" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <button
                      className=" resume_btn bold"
                      onClick={handleDownloadClick}
                    >
                      <span>Resume</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {menuVisible && (
        <div className="header">
          <div className="mobile-bar">
            <button onClick={toggleMenu} className="close-button">
              <img src={del} alt="" className="menu-icon" />
            </button>
            <ul className="menu">
              <li>
                <a
                  className="nav-link bold heading"
                  href="#work"
                  onClick={handleWorkLinkClick}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="nav-link bold  heading"
                  href="#contact"
                  onClick={handleWorkLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
