import React from "react";
import { Link } from "react-router-dom";
import downArrow from "../assets/images/down-arrow.svg";
import upArrow from "../assets/images/up-arrow.svg";
import "./styles/About.css";

const Info: React.FC = () => {
  return (
    <div id="About" className="info-container">
      <Link hidden className="arrow" to="/">
        <img src={upArrow} alt="back-arrow" />
      </Link>
      <h2>About</h2>
      <p>
        Welcome to my online portfolio of a dynamic Full-Stack Developer. On a
        journey of continuous growth and innovation. Embarking on this coding
        odyssey in January 2023, I've since traversed through an ever-evolving
        landscape of programming languages, frameworks, and cutting-edge
        technologies.
      </p>
      <p>
        Within these digital walls, you'll witness the culmination of my
        relentless pursuit of excellence in web development. From crafting sleek
        and responsive front-end interfaces that captivate users at first glance
        to architecting robust back-end systems that ensure seamless
        functionality, my expertise spans the entire spectrum of web
        development.
      </p>
      <Link hidden className="arrow about-next-arrow" to="/skills">
        <img src={downArrow} alt="next-arrow" />
      </Link>
    </div>
  );
};

export default Info;
