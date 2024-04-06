import React, { useState } from "react";
import { Link } from "react-router-dom";
import enterSvg from "../assets/images/enter.svg";
import "./styles/Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  ref: string;
  stack: string[];
}

const ProjectCard: React.FC<{
  project: Project;
}> = ({ project }) => {
  const [showEye, setShowEye] = useState(false);

  return (
    <Link
      to={project.ref}
      target="_blank"
      className="embla__slide Project-card"
      onMouseEnter={() => setShowEye(true)}
      onMouseLeave={() => setShowEye(false)}
      key={project.id}
    >
      <div className="card__header__content">
        <h2>{project.title}</h2>
        <p className="paragraph__slide">{project.description}</p>
        {showEye && (
          <img className="eye__img" src={enterSvg as string} alt="eye" />
        )}
      </div>
      <div className="Project-card_img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="Project-card_techs">
        <ul>
          {project.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
