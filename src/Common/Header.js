import React from "react";
import logo from "../Assets/Images/icon.svg";
import { Link } from "react-router-dom";
function Header() {
  const handleWorkLinkClick = (event) => {
    event.preventDefault();

    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <nav className="display_center navbar-expand-lg">
              <Link to="/">
                <img src={logo} alt="logo_icon" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse flex_end" id="navbarNav">
                <ul className="navbar-nav gap_ul">
                  <li className="nav-item">
                    <Link
                      className="nav-link bold heading active"
                      rt
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link bold heading"
                      href="#work"
                      onClick={handleWorkLinkClick}
                    >
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold  heading" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
