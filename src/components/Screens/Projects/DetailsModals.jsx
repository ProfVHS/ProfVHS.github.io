import "./styles.scss";

import { JsIcon, NodeJsIcon, ReactIcon, SassIcon, SocketIoIcon, TsIcon } from "../Skills/Icons";
import { SecondMindLogo } from "./ProjectsLogo";
import { useAnimate, usePresence, motion } from "framer-motion";
import { useEffect } from "react";

const techLogos = [
  { name: "React.js", logo: <ReactIcon className="projects__modal__content__usedtech-item-icon" /> },
  { name: "TypeScript", logo: <TsIcon className="projects__modal__content__usedtech-item-icon" /> },
  { name: "Sass", logo: <SassIcon className="projects__modal__content__usedtech-item-icon" /> },
  { name: "JavaScript", logo: <JsIcon className="projects__modal__content__usedtech-item-icon" /> },
  { name: "Socket.io", logo: <SocketIoIcon className="projects__modal__content__usedtech-item-icon" /> },
  { name: "Express.js", logo: <span className="projects__modal__content__usedtech-item-icon">E</span> },
  { name: "Node.js", logo: <NodeJsIcon className="projects__modal__content__usedtech-item-icon" /> },
];

export const DetailsModal = ({ setModalOpen, name, technologies, description, logo }) => {
  const [scope, animate] = useAnimate();
  const [isPresence, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresence) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: [0, 1] }, { duration: 0.1 });
        await animate(".projects__modal__content", { opacity: [0, 1], y: [-100, 0] }, { duration: 0.5, type: "spring" });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(".projects__modal__content", { opacity: 0, y: -100 }, { duration: 0.3, type: "spring" });
        await animate(scope.current, { opacity: 0 }, { duration: 0.1 });
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresence]);

  return (
    <div className="projects__modal" onClick={setModalOpen} ref={scope}>
      <motion.div className="projects__modal__content" initial={{ opacity: 0 }}>
        <span className="projects__modal__content__title">{"<p>Szczegóły</p>"}</span>
        <span className="projects__modal__content__projectname">
          {logo}
          {name}
        </span>
        <span className="projects__modal__content__header">Użyto w projekcie</span>
        <div className="projects__modal__content__usedtech">
          {technologies.map((tech) => (
            <span key={tech} className="projects__modal__content__usedtech-item">
              {techLogos.find((logo) => logo.name === tech)?.logo}
              {tech}
            </span>
          ))}
        </div>
        <span className="projects__modal__content__header">Opis</span>
        <div className="projects__modal__content__description">{description}</div>
      </motion.div>
    </div>
  );
};
