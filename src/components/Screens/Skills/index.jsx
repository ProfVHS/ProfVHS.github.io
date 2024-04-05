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

export const Skills = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

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
    console.log("Skills in view", isInView);
    console.log("text index", currentTextIndex);
    if (isInView) {
      setCurrentText("");
      setCurrentTextIndex(0);
    }
  }, [isInView]);
  return (
    <div className="skills__wrapper" id="skills">
      <span className="skills__title">
        {"<h2>"}
        Moje
        <span className="skills__title-color">{currentText}</span>
        {"</h2>"}
      </span>
      <div className="skills__content" ref={ref}>
        <AnimatePresence>{isInView ? <SkillsItems skills={skills} /> : null}</AnimatePresence>
      </div>
    </div>
  );
};
