import React, { useEffect } from "react";
import { Skill } from "./Skill";

import { useAnimate, usePresence } from "framer-motion";

export const SkillsItems = ({ skills }) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: [0, 1], y: [100, 0], transition: { delayChildren: 0.5 } }, { duration: 0.3 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, y: 100, transition: { duration: 1 } });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);
  return (
    <div className="skills__items" ref={scope}>
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} element={skill.element} />
      ))}
    </div>
  );
};
