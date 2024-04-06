import React from "react";
import { Link } from "react-router-dom";
import Downarrow from "../assets/images/down-arrow.svg";
import Uparrow from "../assets/images/up-arrow.svg";
import SkillCard from "./SkillCard";
import "./styles/SkillSet.css";

interface Skill {
  name: string;
  image: string;
  level: number;
}

const skillList: Skill[] = [
  {
    name: "JavaScript",
    image: "JavaScript.tsx",
    level: 4.2,
  },
  {
    name: "TypeScript",
    image: "TypeScript.tsx",
    level: 4.4,
  },
  {
    name: "Java",
    image: "Java.tsx",
    level: 3.1,
  },
  {
    name: "Python",
    image: "Python.tsx",
    level: 3.1,
  },
  {
    name: "React",
    image: "ReactJs.tsx",
    level: 4.2,
  },
  {
    name: "Docker",
    image: "Docker.tsx",
    level: 3.5,
  },
  {
    name: "SQL",
    image: "Sql.tsx",
    level: 3.5,
  },
  {
    name: "MySQL",
    image: "MySql.tsx",
    level: 3.8,
  },
  {
    name: "Git",
    image: "Git.tsx",
    level: 4,
  },
  {
    name: "GitHub",
    image: "GitHub.tsx",
    level: 4,
  },
  {
    name: "UI-UX",
    image: "UiUx.tsx",
    level: 4.2,
  },
  {
    name: "Html",
    image: "Html.tsx",
    level: 5,
  },
  {
    name: "Css",
    image: "Css.tsx",
    level: 5,
  },
  {
    name: "Redux",
    image: "Redux.tsx",
    level: 4,
  },
  {
    name: "Vite",
    image: "Vite.tsx",
    level: 4.2,
  },
  {
    name: "Node",
    image: "Node.tsx",
    level: 4,
  },
  {
    name: "SpringBoot",
    image: "SpringBoot.tsx",
    level: 3.5,
  },
  {
    name: "Mocha",
    image: "Mocha.tsx",
    level: 3.8,
  },
  {
    name: "Jest",
    image: "Jest.tsx",
    level: 3.8,
  },
  {
    name: "Cypress",
    image: "Cypress.tsx",
    level: 3.8,
  },
  {
    name: "Jwt",
    image: "Jwt.tsx",
    level: 3.8,
  },
  {
    name: "Figma",
    image: "Figma.tsx",
    level: 4.2,
  },
  {
    name: "IntelliJ",
    image: "IntelliJ.tsx",
    level: 4.2,
  },
  {
    name: "VsCode",
    image: "VsCode.tsx",
    level: 4.2,
  },
];

const SkillSet: React.FC = () => {
  return (
    <div id="Skill-Set" className="skill-set-container">
      <Link hidden className="arrow" to="/about">
        <img src={Uparrow as string} alt="back-arrow" />
      </Link>
      <h2>Skills</h2>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <Link hidden className="arrow" to="/projects">
        <img src={Downarrow as string} alt="back-arrow" />
      </Link>
    </div>
  );
};

export default SkillSet;
