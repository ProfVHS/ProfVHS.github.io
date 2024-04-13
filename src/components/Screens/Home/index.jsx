import { Button } from "../../Button";
import "./styles.scss";
import rafalrubaj from "../../../assets/me.jpg";
export const Home = ({ homeRef, contactRef }) => {
  return (
    <div className="home__wrapper" ref={homeRef}>
      <div className="home__side left">
        <div className="home__side-left">
          <div className="home__title">
            <span>{"<h1>"}Rafał Rubaj,</span>
            <span>
              <span className="home__title-color">React.js</span> Developer{"</h1>"}
            </span>
          </div>
          <div className="home__description">Jestem początkującym programistą, od 5 lat uczę się programowania, od 3 lat programuje w Javascript/Typescript, React</div>
          <div className="home__buttonWrapper">
            <Button
              title={"Kontakt"}
              onClick={() => {
                contactRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Button title={"Pobierz CV"} />
          </div>
        </div>
      </div>
      <div className="home__side right">
        <img src={rafalrubaj} alt="Rafał Rubaj" className="home__image" draggable={false} />
      </div>
    </div>
  );
};
