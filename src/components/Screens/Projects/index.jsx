import React, { useState } from "react";

import "./styles.scss";

import { ProjectsList } from "./ProjectsList";
import { DetailsModal } from "./DetailsModals";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState();
  return (
    <div className="projects">
      <span className="projects__title">
        {"<h3>"}
        Moje
        <span className="projects__title-color"> Projekty</span>
        {"</h3>"}
      </span>

      <ProjectsList setModalOpen={setModalOpen} />
      <AnimatePresence>{modalOpen ? <DetailsModal {...modalOpen} setModalOpen={() => setModalOpen()} /> : null}</AnimatePresence>
    </div>
  );
};
