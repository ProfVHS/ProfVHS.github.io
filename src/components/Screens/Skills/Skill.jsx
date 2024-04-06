import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

export const Skill = ({ name, element, index }) => {
  const [scope, animate] = useAnimate();
  const [isPresence, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresence) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: [0, 1], y: [100, 0] }, { duration: 0.3, delay: 0.3 + index * 0.1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, y: 100, transition: { duration: 1 } });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresence]);

  return (
    <div className="skills__item" ref={scope}>
      {element}
      <span className="skills__item__title">{name}</span>
    </div>
  );
};
