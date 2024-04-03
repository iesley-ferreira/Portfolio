import React from "react";
import { Link } from "react-router-dom";
import downArrow from "../assets/images/down-arrow.svg";
import perfilImage from "../assets/img-perfil-01pb.png";
import GitHubLink from "./links/GitHub";
import Instagram from "./links/Instagram";
import LinkedIn from "./links/LinkedIn";
import WhatsApp from "./links/WhatsApp";
import "./styles/Home.css";

import "animate.css";
import Mail from "./links/Mail";

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
            <p>I am excited to showcase my portfolio and skills.</p>
            <p>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
          </div>
          <div className="contacts">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="left-indication-icon"
            >
              <source src="/dist/animation-seta.webm" type="video/webm" />
            </video>
            <GitHubLink />
            <LinkedIn />
            <WhatsApp />
            <Instagram />
            <Mail />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="right-indication-icon"
            >
              <source src="/dist/animation-seta.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className="profile-image">
          <img src={perfilImage} alt="perfil-image" />
        </div>
      </div>
      <Link hidden className="arrow" to="/about">
        <img src={downArrow} alt="back-arrow" />
      </Link>
    </div>
  );
};

export default Hello;
