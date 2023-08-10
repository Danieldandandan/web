import React from "react";
import imageOverlay from "../img/earth.jpg";
import pdf from "../img/Zhencheng_Chu_Resume.pdf";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{
          backgroundImage: "url(" + imageOverlay + ")",
          height: "23cm",
        }}
        id="contact"
      >
        <div className="container  contact-mf box-shadow-full ">
          <div className="col-md-12">
            <div className="title-box-2">
              <h5 className="title-left">Get in Touch</h5>
            </div>
            <div className="more-info">
              <p className="lead">
                Whether you want to get in touch, talk about a project collaboration, or just say
                hi, I'd love to hear from you!
              </p>
              <ul class="list-ico">
                <li>
                  <span class="ion-ios-telephone"></span> (669) 285-7080
                </li>
                <li>
                  <a href="mailto:workchuzc@gmail.com">
                    <span class="ion-email"></span> workchuzc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <a href="https://www.zhenchengchu.com" target="_blank" rel="noopener noreferrer">
                    <span className="ico-circle">
                      <i className="ion-social-codepen"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Danieldandandan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <i className="ion-social-github"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zhencheng-chu-242555198/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <i className="ion-social-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={pdf} download={true} target="_blank" rel="noopener noreferrer">
                    <span className="ico-circle">
                      <i class="bi bi-file-earmark-pdf-fill"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
