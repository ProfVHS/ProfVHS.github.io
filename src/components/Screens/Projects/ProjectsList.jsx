import { ProjectItem } from "./ProjectItem";

import SecondMindScreenshot from "../../../assets/secondmind-screenshot.png";
import WeatherAppScreenshot from "../../../assets/weatherapp-screenshot.png";
import PartyGamesScreenshot from "../../../assets/partygames-screenshot.png";

import { PartyGamesLogo, SecondMindLogo, WeatherAppLogo } from "./ProjectsLogo";

const projects = [
  {
    name: "Second Mind",
    description: "Aplikacja do zarządzania zadaniami. Posiada również kategorie oraz funkcję kalendarza.",
    logo: <SecondMindLogo />,
    screenshot: SecondMindScreenshot,
    github: "https://github.com/ProfVHS/second-mind",
    showLink: "https://second-mind.vercel.app/",
  },
  {
    name: "Weather App",
    description: "Aplikacja do sprawdzania pogody z dynamicznym motywem zależnym od godziny sprawdzanego miasta.",
    logo: <WeatherAppLogo />,
    screenshot: WeatherAppScreenshot,
    github: "https://github.com/ProfVHS/weather-app",
    showLink: "https://weather-app-profvhs.vercel.app/",
  },
  {
    name: "PartyGames (WIP)",
    description: "Aplikacja robiona w grupie dwuosobowej. Aplikacja do rozgrywania mini-gier przez wideorozmowę. W trakcie tworzenia.",
    logo: <PartyGamesLogo />,
    screenshot: PartyGamesScreenshot,
    github: "https://github.com/ProfVHS/PartyGames",
    showLink: "",
  },
];

export const ProjectsList = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </>
  );
};
