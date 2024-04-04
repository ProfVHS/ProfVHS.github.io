import React from "react";
import "./styles.scss";
import { Person } from "./Person";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Person />
        <span className="header__logo-name">{"<Rafał Rubaj />"}</span>
      </div>
      <div className="header__navbar">
        <a href="">Strona Główna</a>
        <a href="">Umiejętności</a>
        <a href="">Projekty</a>
        <a href="">Kontakt</a>
      </div>
    </div>
  );
};
