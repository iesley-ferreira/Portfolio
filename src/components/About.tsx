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
        <p>Meu nome é Iesley, e sou um apaixonado por tecnologia.</p>
        <p>
          Desde que me envolvi com programação, descobri uma paixão por criar
          soluções digitais e me desafiar constantemente a aprender e crescer.
        </p>
        <p>
          Minha jornada até aqui tem sido marcada por determinação e entusiasmo
          em explorar o vasto mundo do desenvolvimento web.
        </p>
        <p>
          Descobri uma paixão por criar experiências digitais envolventes e
          funcionais. Meu objetivo é ir além das expectativas dos clientes,
          construindo não apenas websites, mas sim soluções digitais que
          resolvam problemas de forma eficaz e impressionem os usuários.
        </p>
        <p>
          Tenho na minha caixa de ferramentas diversas tecnologias. Estou
          constantemente buscando aprender e me atualizar para garantir que
          minhas habilidades estejam alinhadas com as últimas tendências e
          melhores práticas do mercado. Além do desenvolvimento, sou um
          entusiasta da usabilidade e da acessibilidade. Acredito que a
          experiência do usuário deve ser prioridade em cada projeto que
          empreendo. Quando não estou codificando, gosto de me inspirar em
          diferentes formas de arte e explorar novas tecnologias. Estou sempre
          pronto para enfrentar novos desafios e expandir meus horizontes. Estou
          animado para colaborar com você e transformar suas ideias em
          realidade. Vamos trabalhar juntos para criar algo verdadeiramente
          excepcional.
        </p>
      </div>
      <Link hidden className="arrow about-next-arrow" to="/skills">
        <img src={downArrow} alt="next-arrow" />
      </Link>
    </div>
  );
};

export default Info;
