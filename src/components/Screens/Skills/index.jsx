import { useEffect, useRef, useState } from "react";
import { GitIcon, HtmlCssIcon, JsIcon, NodeJsIcon, ReactIcon, SassIcon, SocketIoIcon, TsIcon } from "./Icons";
import { SkillsItems } from "./SkillsItems";
import "./styles.scss";

import { useInView, AnimatePresence } from "framer-motion";

const text = " Umiejętności";
const skills = [
  { name: "git source", element: <GitIcon /> },
  { name: "JavaScript", element: <JsIcon /> },
  { name: "TypeScript", element: <TsIcon /> },
  { name: "React.js", element: <ReactIcon /> },
  { name: "HTML, css", element: <HtmlCssIcon /> },
  { name: "Sass", element: <SassIcon /> },
  { name: "Node.js", element: <NodeJsIcon /> },
  { name: "Socket.io", element: <SocketIoIcon /> },
];

export const Skills = ({ skillsRef }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let timeout;

    if (currentTextIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentTextIndex]);
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 125);
    }
    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentText]);

  useEffect(() => {
    if (isInView) {
      setCurrentText("");
      setCurrentTextIndex(0);
    }
  }, [isInView]);
  return (
    <div className="skills" ref={skillsRef}>
      <div className="skills__wrapper" ref={ref}>
        <span className="skills__title">
          {"<h2>"}
          Moje
          <span className="skills__title-color">{currentText}</span>
          {"</h2>"}
        </span>
        <div className="skills__content">
          <SkillsItems skills={skills} />
        </div>
      </div>
    </div>
  );
};
