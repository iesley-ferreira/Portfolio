import React, { useEffect, useState } from "react";
import "./styles/SkillCard.css";
import Css from "./svgs/Css";
import Cypress from "./svgs/Cypress";
import Docker from "./svgs/Docker";
import Figma from "./svgs/Figma";
import Git from "./svgs/Git";
import GitHub from "./svgs/GitHub";
import Html from "./svgs/Html";
import IntelliJ from "./svgs/IntelliJ";
import Java from "./svgs/Java";
import JavaScript from "./svgs/JavaScript";
import Jest from "./svgs/Jest";
import Jwt from "./svgs/Jwt";
import Mocha from "./svgs/Mocha";
import MySql from "./svgs/MySql";
import Node from "./svgs/Node";
import Python from "./svgs/Python";
import ReactJs from "./svgs/ReactJs";
import Redux from "./svgs/Redux";
import SpringBoot from "./svgs/SpringBoot";
import Sql from "./svgs/Sql";
import TypeScript from "./svgs/TypeScript";
import UiUx from "./svgs/UiUx";
import Vite from "./svgs/Vite";
import VsCode from "./svgs/VsCode";

interface Skill {
  name: string;
  image: string;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC | null>(null);
  const fillPercentage = (skill.level / 5) * 100;

  useEffect(() => {
    const selectSvgComponent = () => {
      switch (skill.image) {
        case "JavaScript.tsx":
          setSvgComponent(() => JavaScript);
          break;
        case "TypeScript.tsx":
          setSvgComponent(() => TypeScript);
          break;
        case "Java.tsx":
          setSvgComponent(() => Java);
          break;
        case "Python.tsx":
          setSvgComponent(() => Python);
          break;
        case "ReactJs.tsx":
          setSvgComponent(() => ReactJs);
          break;
        case "Docker.tsx":
          setSvgComponent(() => Docker);
          break;
        case "Sql.tsx":
          setSvgComponent(() => Sql);
          break;
        case "MySql.tsx":
          setSvgComponent(() => MySql);
          break;
        case "Git.tsx":
          setSvgComponent(() => Git);
          break;
        case "GitHub.tsx":
          setSvgComponent(() => GitHub);
          break;
        case "UiUx.tsx":
          setSvgComponent(() => UiUx);
          break;
        case "Html.tsx":
          setSvgComponent(() => Html);
          break;
        case "Css.tsx":
          setSvgComponent(() => Css);
          break;
        case "Redux.tsx":
          setSvgComponent(() => Redux);
          break;
        case "Vite.tsx":
          setSvgComponent(() => Vite);
          break;
        case "Node.tsx":
          setSvgComponent(() => Node);
          break;
        case "SpringBoot.tsx":
          setSvgComponent(() => SpringBoot);
          break;
        case "Mocha.tsx":
          setSvgComponent(() => Mocha);
          break;
        case "Jest.tsx":
          setSvgComponent(() => Jest);
          break;
        case "Cypress.tsx":
          setSvgComponent(() => Cypress);
          break;
        case "Jwt.tsx":
          setSvgComponent(() => Jwt);
          break;
        case "Figma.tsx":
          setSvgComponent(() => Figma);
          break;
        case "IntelliJ.tsx":
          setSvgComponent(() => IntelliJ);
          break;
        case "VsCode.tsx":
          setSvgComponent(() => VsCode);
          break;

        default:
          setSvgComponent(null);
      }
    };

    selectSvgComponent();
  }, [skill.image]);

  return (
    <div className="skill-card-container">
      <div className="skill-card">
        <h3>{skill.name}</h3>
        {SvgComponent && <SvgComponent />}
        <div className="level-bar">
          <div
            className="fill fill-animation"
            style={
              {
                "--fillPercentage": `${fillPercentage}%`,
              } as React.CSSProperties
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
