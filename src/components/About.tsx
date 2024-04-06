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
      <div className="text-container">
        <p>
          Me chamo Iesley e sou apaixonado por tecnologia e desenvolvimento web.
          Estou sempre em busca de aprendizado e crescimento, dedicando-me a
          criar soluções digitais envolventes e funcionais que superem as
          expectativas dos clientes. Priorizo a usabilidade e acessibilidade em
          meus projetos, e estou sempre atualizado com as últimas tendências do
          mercado. Fora do desenvolvimento, busco inspiração em diversas formas
          de arte e estou pronto para enfrentar novos desafios. Estou ansioso
          para colaborar com você e transformar suas ideias em realidade.
        </p>
      </div>
      <Link hidden className="arrow about-next-arrow" to="/skills">
        <img src={downArrow} alt="next-arrow" />
      </Link>
    </div>
  );
};

export default Info;
