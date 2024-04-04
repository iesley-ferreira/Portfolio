import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import animationData from "../assets/animations/animation.json";
import perfilImage from "../assets/images/img-perfil-01pb.png";
import GitHubLink from "./links/GitHub";
import Instagram from "./links/Instagram";
import LinkedIn from "./links/LinkedIn";
import WhatsApp from "./links/WhatsApp";
import "./styles/Home.css";

import "animate.css";
import Mail from "./links/Mail";
import DownArrow from "./svgs/arrows/DownArrow";

const Hello: React.FC = () => {
  return (
    <div id="Home" className="main-container">
      <div className="principal">
        <div className="main-div">
          <h1 className="animate__animated animate__fadeInUp animate__slow">
            Iesley Ferreira.
          </h1>
          <p className="role typing__animation">Full-Stack Developer</p>
          <div className="thankyou">
            <p>Thank you for visiting.</p>
            <br />
            <p>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
            <br />
            <p>
              Let's collaborate and make your ideas come true. Contact me today
              to discuss your project and start an exciting journey.
            </p>
          </div>
          <div className="contacts">
            <Lottie
              className="left-indication-icon"
              animationData={animationData}
            />
            <GitHubLink />
            <LinkedIn />
            <WhatsApp />
            <Instagram />
            <Mail />
            <Lottie
              className="right-indication-icon"
              animationData={animationData}
            />
          </div>
        </div>
        <div className="profile-image">
          <img src={perfilImage} alt="perfil-image" />
        </div>
      </div>
      <Link hidden className="arrow" to="/about">
        <DownArrow />
      </Link>
    </div>
  );
};

export default Hello;
