import React, { useEffect, useRef } from "react";
import { Skill } from "./Skill";
import { AnimatePresence, useInView } from "framer-motion";

export const SkillsItems = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="skills__items" ref={ref}>
      <AnimatePresence>{isInView ? skills.map((skill, index) => <Skill key={skill.name} index={index} name={skill.name} element={skill.element} />) : null}</AnimatePresence>
    </div>
  );
};
