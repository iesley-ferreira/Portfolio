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
        <div className="main-div ">
          <h1 className="animate__animated animate__zoomInDown animate__slow">
            Iesley Ferreira.
          </h1>
          <p className="role typing__animation">Full-Stack Developer</p>
          <div className="thankyou animate__animated animate__zoomIn">
            <p>Bem-vindo ao meu mundo digital!</p>
            <p>
              Minha especialidade é criar experiências digitais envolventes e
              acessíveis, elevando suas concepções para o próximo nível.
            </p>
            <p>Vamos transformar suas visões em realidade juntos.</p>
            <p>
              Entre em contato hoje mesmo para discutir seu projeto e dar vida
              às suas ideias.
            </p>
          </div>
          <div className="contacts-container">
            <div className="contacts animate__animated animate__bounceInLeft">
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
        </div>
        <div className="profile-image animate__animated animate__zoomIn animate__slow">
          <img src={perfilImage as string} alt="perfil-image" />
        </div>
      </div>
      <Link hidden className="arrow down-arrow" to="/about">
        <DownArrow />
      </Link>
    </div>
  );
};

export default Hello;
