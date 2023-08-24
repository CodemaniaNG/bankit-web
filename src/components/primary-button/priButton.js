import React from "react";
import "./priButton.css";

const PriButton = ({ text, action }) => {
  return (
    <button onClick={action} className="pri-button">
      {text}
    </button>
  );
};

export default PriButton;
