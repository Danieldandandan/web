import React from "react";
import $ from "jquery";

import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";

const pages = ["home", "about", "work", "contact"];
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      if (window.pageYOffset > height / 2) {
        document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });
  }

  handleScrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  render() {
    return (
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" onClick={() => this.handleScrollToSection("home")}>
            <img src={this.state.logo} alt="logo" style={{ maxWidth: "100px" }} />
          </a>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              {pages.map((page) => (
                <li className="nav-item" style={{ cursor: "pointer" }}>
                  <a
                    className="nav-link js-scroll"
                    onClick={() => this.handleScrollToSection(page)}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
