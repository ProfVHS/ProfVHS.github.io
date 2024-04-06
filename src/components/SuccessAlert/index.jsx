import React, { useEffect } from "react";
import "./styles.scss";

import { motion, useAnimate, usePresence } from "framer-motion";

export const SuccessAlert = ({ text }) => {
  const [scope, animate] = useAnimate();
  const [isPresence, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresence) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: [0, 1], y: [100, 0], x: "-50%" }, { duration: 0.3, ease: "easeIn", type: "spring" });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, y: 100 }, { duration: 0.3, ease: "easeIn", type: "spring" });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresence]);

  return (
    <motion.div className="success-alert" ref={scope}>
      <CheckmarkIcon className="success-alert__icon" />
      <span className="success-alert__title">{text}</span>
    </motion.div>
  );
};

const CheckmarkIcon = (props) => {
  return (
    <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        strokeWidth={2}
        d="M6.5501 13L0.850098 7.29998L2.2751 5.87498L6.5501 10.15L15.7251 0.974976L17.1501 2.39998L6.5501 13Z"
        fill="none"
      />
    </svg>
  );
};
