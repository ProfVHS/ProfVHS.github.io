import { ProjectItem } from "./ProjectItem";

import SecondMindScreenshot from "../../../assets/secondmind-screenshot.png";
import WeatherAppScreenshot from "../../../assets/weatherapp-screenshot.png";
import PartyGamesScreenshot from "../../../assets/partygames-screenshot.png";

import { PartyGamesLogo, SecondMindLogo, WeatherAppLogo } from "./ProjectsLogo";
import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Second Mind",
    description: "Aplikacja do zarządzania zadaniami. Posiada również kategorie oraz funkcję kalendarza.",
    logo: <SecondMindLogo />,
    screenshot: SecondMindScreenshot,
    github: "https://github.com/ProfVHS/second-mind",
    showLink: "https://second-mind.vercel.app/",
    details: {
      technologies: ["React.js", "TypeScript", "Sass"],
      description:
        "Second Mind - aplikacja do zarządzania zadaniami. Od początku użytkownik posiada jedną kategorie - kategorie główną, której nie można usunąć. Można dodawać zadania do kategorii podając nazwę zadania, krótki opis (opcjonalnie) datę zakończenia oraz priorytet wykonania zadania - od niego zależy w jakiej kolejności sortują sie zadania (najwyższy priorytet na górze). Można również dodawać nowe kategorie, które można dowolnie edytować oraz usuwać, tak samo jak i zadania. Aplikacja posiada również prosty kalendarz który wyświetla czy w jakiś dzień są jakieś zadania do wykonania, oraz po kliknięciu w dowolny dzień wyświetla zadania do wykonania w tym dniu. Wszystkie dane są zapisywane w localStorage przeglądarki, które można usunąć w ustawieniach aplikacji.",
    },
  },
  {
    name: "Weather App",
    description: "Aplikacja do sprawdzania pogody z dynamicznym motywem zależnym od godziny sprawdzanego miasta.",
    logo: <WeatherAppLogo />,
    screenshot: WeatherAppScreenshot,
    github: "https://github.com/ProfVHS/weather-app",
    showLink: "https://weather-app-profvhs.vercel.app/",
    details: {
      technologies: ["React.js", "TypeScript", "Sass"],
      description:
        "Weather App - aplikacja do sprawdzania pogody. Aplikacja posiada input z podpowiedziami miast, po wybraniu interesującego nas miasta, aplikacja pobiera dane z API (open-meteo.com) i wyświetla je w aplikacji. W zależności od godziny w danym mieście, aplikacja zmienia motyw na jasny lub ciemny. Aplikacja wyświetla również pogode na 3 dni do przodu. Projekt graficzny aplikacji został w pełni stworzony przeze mnie w programie Figma.",
    },
  },
  {
    name: "PartyGames (WIP)",
    description: "Aplikacja robiona w grupie dwuosobowej. Aplikacja do rozgrywania mini-gier przez wideorozmowę. W trakcie tworzenia.",
    logo: <PartyGamesLogo />,
    screenshot: PartyGamesScreenshot,
    github: "https://github.com/ProfVHS/PartyGames",
    showLink: "",
    details: {
      technologies: ["React.js", "TypeScript", "Sass", "Socket.io", "Express.js", "Node.js"],
      description:
        "PartyGames - aplikacja robiona w grupie dwuosobowej. Ja zajmowałem się front-endem i okazyjnie robiłem coś po stronie serwera. Aplikacja umożliwia grę w przygotowane minigry (w losowej kolejności) przez wideorozmowę. Po stronie serwera używamy Socket.io do przekazywania informacji i komunikacji z serwerem oraz bazy danych SQLite do przechowywania informacji o pokojach oraz graczach. Postawiliśmy na SQLite ponieważ nie potrzebujemy trzymać tych informacji na dłużej niż trwa gra. W front-endzie używamy React.js, TypeScript oraz Sass. Projekt graficzny aplikacji został w pełni stworzony przeze mnie w programie Figma. Animacje w aplikacji są robione w CSS lub przy użyciu biblioteki framer-motion.",
    },
  },
];

export const ProjectsList = ({ setModalOpen }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView);
  return (
    <div className="projects__list" ref={ref}>
      <AnimatePresence>
        {isInView
          ? projects.map((project, i) => (
              <ProjectItem
                key={project.name}
                id={i}
                {...project}
                setModalOpen={() => setModalOpen({ name: project.name, technologies: project.details.technologies, description: project.details.description, logo: project.logo })}
              />
            ))
          : null}
      </AnimatePresence>
    </div>
  );
};
