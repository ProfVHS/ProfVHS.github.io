import "./App.scss";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/Screens/Home";
import { Skills } from "./components/Screens/Skills";
import { Projects } from "./components/Screens/Projects";
import { Contact } from "./components/Screens/Contact";
import { useEffect, useRef, useState } from "react";
//content__side-left
function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="content">
        <Navbar homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
        <Home homeRef={homeRef} contactRef={contactRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
    </>
  );
}

export default App;
