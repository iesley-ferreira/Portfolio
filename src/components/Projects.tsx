import "./styles/Projects.css";
import React from "react";
import { Link } from "react-router-dom";
import { EmblaOptionsType } from 'embla-carousel'

import "./styles/base.css";
import "./styles/embla.css";
import EmblaCarousel from "./EmblaCarousel";
import upArrow from "../assets/images/up-arrow.svg";


const Projects: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="projects__container">
      <div  className="projects__content">
      <Link hidden className="arrow projects__arrow" to="/skills">
        <img src={upArrow} alt="back-arrow" />
      </Link>
      <h2 className="projects__title">Projects</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Projects;
