import React from "react";
import "./styles.scss";
import { Person } from "./Person";

export const Navbar = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <Person />
        <span className="header__logo-name">{"<Rafał Rubaj />"}</span>
      </div>
      <div className="header__navbar">
        <button
          onClick={() => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
          }}>
          Strona Główna
        </button>
        <button
          onClick={() => {
            skillsRef.current.scrollIntoView({ behavior: "smooth" });
          }}>
          Umiejętności
        </button>
        <button
          onClick={() => {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
          }}>
          Projekty
        </button>
        <button
          onClick={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}>
          Kontakt
        </button>
      </div>
    </div>
  );
};
