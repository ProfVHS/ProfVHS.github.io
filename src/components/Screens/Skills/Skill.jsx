export const Skill = ({ name, element }) => {
  return (
    <div className="skills__item">
      {element}
      <span className="skills__item__title">{name}</span>
    </div>
  );
};
