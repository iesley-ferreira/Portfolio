import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Circle from "./components/Circle";
import Header from "./components/Header";

import "./RootLayout.css";

const RootLayout = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState<string>("Home");

  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    console.log(path);

    setCurrentSection(path);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="wrapper-content">
      <Header />
      <nav className="layout-nav">
        <div className="roadmap-bar"></div>
        <Link
          to="/home"
          onClick={() => handleSectionChange("home")}
          className={currentSection === "home" ? "sublinhado" : "vazio"}
        >
          Home
          <Circle
            className={currentSection === "home" ? "preenchido" : "vazio"}
          />
        </Link>

        <Link
          to="/about"
          onClick={() => handleSectionChange("about")}
          className={currentSection === "about" ? "sublinhado" : "vazio"}
        >
          About
          <Circle
            className={currentSection === "about" ? "preenchido" : "vazio"}
          />
        </Link>

        <Link
          to="/skills"
          onClick={() => handleSectionChange("skills")}
          className={
            currentSection === "skills" ? "sublinhado" : "vazio"
          }
        >
          Skill-Set
          <Circle
            className={
              currentSection === "skills" ? "preenchido" : "vazio"
            }
          />
        </Link>

        <Link
          to="/projects"
          onClick={() => handleSectionChange("projects")}
          className={currentSection === "projects" ? "sublinhado" : "vazio"}
        >
          Projects
          <Circle
            className={
              currentSection === "projects" ? "preenchido" : "vazio"
            }
          />
        </Link>
      </nav>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
