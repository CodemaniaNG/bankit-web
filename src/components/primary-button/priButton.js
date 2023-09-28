import React from "react";
import "./priButton.css";

const PriButton = ({ text, action, type, active }) => {
  return active ? (
    <button onClick={action} className="pri-button" type={type}>
      {text}
    </button>
  ) : (
    <button disabled className="pri-disabled">
      {text}
    </button>
  );
};

export default PriButton;
