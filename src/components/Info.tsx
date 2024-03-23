import React from 'react';
import './styles/Info.css';
import upArrow from "../assets/images/up-arrow.svg";
import downArrow from "../assets/images/down-arrow.svg";


const Info: React.FC = () => {
  return (
    <div id='About'  className="info-container">
      <a hidden className="arrow" href="/">
        <img src={upArrow} alt="back-arrow" />
      </a>
        <h2>About</h2>
        <p>
          Welcome to my online portfolio of a dynamic Full-Stack Developer.
          On a journey of continuous growth and innovation. Embarking on this coding odyssey in January 2023, I've since traversed through an ever-evolving landscape of programming languages, frameworks, and cutting-edge technologies.
        </p>
        <p>
          Within these digital walls, you'll witness the culmination of my relentless pursuit of excellence in web development. From crafting sleek and responsive front-end interfaces that captivate users at first glance to architecting robust back-end systems that ensure seamless functionality, my expertise spans the entire spectrum of web development.
        </p>
        <a hidden className="arrow" href="/skills">
        <img src={downArrow} alt="back-arrow" />
      </a>
    </div>
  );
};

export default Info;