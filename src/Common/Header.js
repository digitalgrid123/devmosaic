import React from "react";

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
            <nav class="display_center navbar-expand-lg">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse flex_end" id="navbarNav">
                <ul class="navbar-nav gap_ul">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#work"
                      onClick={handleWorkLinkClick}
                    >
                      Work
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
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
