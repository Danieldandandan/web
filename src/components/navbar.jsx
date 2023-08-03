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

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 1,
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img src={this.state.logo} alt="logo" style={{ maxWidth: "100px" }} />
          </a>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              {pages.map((page) => (
                <li className="nav-item">
                  <a className="nav-link js-scroll" href={"#" + page}>
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
