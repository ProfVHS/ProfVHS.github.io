import { GitHubButton } from "./Buttons";

export const ProjectItem = ({ name, description, logo, screenshot, github, showLink }) => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="projects__item">
      <span className="projects__item__title">
        {logo}
        <span>{name}</span>
      </span>
      <div className="projects__item__screenshot" onClick={() => openLink(showLink)}>
        <img className="projects__item__screenshot-img" src={screenshot} alt={name} draggable={false} />
        <ViewIcon className="projects__item__screenshot-icon" />
      </div>
      <span className="projects__item__description">{description}</span>
      <div className="projects__item__links">
        <button className="projects__item__button">Szczegóły</button>
        <GitHubButton onClick={() => openLink(github)} />
      </div>
    </div>
  );
};

const ViewIcon = (props) => (
  <svg width={20} height={20} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.79565 13.6839 9.55871 13.1213 10.1213C12.5587 10.6839 11.7956 11 11 11C10.2044 11 9.44129 10.6839 8.87868 10.1213C8.31607 9.55871 8 8.79565 8 8C8 7.20435 8.31607 6.44129 8.87868 5.87868C9.44129 5.31607 10.2044 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C20.27 12.39 16 15.5 11 15.5C6 15.5 1.73 12.39 0 8C1.73 3.61 6 0.5 11 0.5ZM2.18 8C2.98825 9.65031 4.24331 11.0407 5.80248 12.0133C7.36165 12.9858 9.1624 13.5013 11 13.5013C12.8376 13.5013 14.6383 12.9858 16.1975 12.0133C17.7567 11.0407 19.0117 9.65031 19.82 8C19.0117 6.34969 17.7567 4.95925 16.1975 3.98675C14.6383 3.01424 12.8376 2.49868 11 2.49868C9.1624 2.49868 7.36165 3.01424 5.80248 3.98675C4.24331 4.95925 2.98825 6.34969 2.18 8Z"
      fill="white"
    />
  </svg>
);
