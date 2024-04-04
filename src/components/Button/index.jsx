import React from "react";
import "./styles.scss";

export const Button = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
