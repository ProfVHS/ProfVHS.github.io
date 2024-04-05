import React from "react";

import "./styles.scss";

import { ProjectsList } from "./ProjectsList";

export const Projects = () => {
  return (
    <div className="projects">
      <span className="projects__title">
        {"<h3>"}
        Moje
        <span className="projects__title-color"> Projekty</span>
        {"</h3>"}
      </span>

      <div className="projects__list">
        <ProjectsList />
      </div>
    </div>
  );
};
