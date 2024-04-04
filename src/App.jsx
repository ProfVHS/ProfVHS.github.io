import "./App.scss";
import { Navbar } from "./components/Navbar";

import rafalrubaj from "./assets/rafal-rubaj.png";
import { Button } from "./components/Button";
import { Home } from "./components/Screens/Home";
//content__side-left
function App() {
  return (
    <>
      <div className="content">
        <Navbar />
        <Home />
        <Home />
      </div>
    </>
  );
}

export default App;
