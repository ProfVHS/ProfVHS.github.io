import "./App.scss";
import { Navbar } from "./components/Navbar";

import rafalrubaj from "./assets/rafal-rubaj.png";
import { Button } from "./components/Button";
import { Home } from "./components/Screens/Home";
import { Skills } from "./components/Screens/Skills";
import { Projects } from "./components/Screens/Projects";
//content__side-left
function App() {
  return (
    <>
      <div className="content">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
