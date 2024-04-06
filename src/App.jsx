import "./App.scss";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/Screens/Home";
import { Skills } from "./components/Screens/Skills";
import { Projects } from "./components/Screens/Projects";
import { Contact } from "./components/Screens/Contact";
import { useRef } from "react";
//content__side-left
function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className="content">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
