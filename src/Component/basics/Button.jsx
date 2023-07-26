import React from "react";
import "../../styles/index.css";

export const Button = ({ onButtonClick, style, isActive = true, children }) => {
  const styleButton = isActive ? style : {};

  return (
    <div>
      <button
        className="button"
        style={styleButton}
        disabled={!isActive}
        onClick={onButtonClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
