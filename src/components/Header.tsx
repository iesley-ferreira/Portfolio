import React from "react";
import "./styles/Header.css";

import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header-container-principal">
      <div className="header-container">
        {path !== "/" ? <h1>IesleyFerreira.</h1> : <h1>PORTFOLIO.</h1>}
      </div>
    </header>
  );
};

export default Header;
