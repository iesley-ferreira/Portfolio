import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Projects.css";

import upArrow from "../assets/images/up-arrow.svg";
import EmblaCarousel from "./EmblaCarousel";
import "./styles/base.css";
import "./styles/embla.css";

const Projects: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="projects__container">
      <div className="projects__content">
        <Link hidden className="arrow projects__arrow" to="/skills">
          <img src={upArrow as string} alt="back-arrow" />
        </Link>
        <h2 className="projects__title animate__animated animate__jello animate__slow">
          Projects
        </h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <p className="aviso">
          Aviso: caso voce se depare com erro de CORS ao acessar os projetos,
          aperte "ctrl + shift + r" no seu navegador.
        </p>
      </div>
    </div>
  );
};

export default Projects;
