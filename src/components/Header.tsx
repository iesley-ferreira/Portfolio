import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header-container-principal">
      <div className="header-container">
        {path !== "/" ? (
          <Link to="/">
            <h1>IesleyFerreira.</h1>
          </Link>
        ) : (
          <Link to="/">
            <h1>PORTFOLIO.</h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
