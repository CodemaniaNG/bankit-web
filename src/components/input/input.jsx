import React from "react";
import "./input.css";
import ClosedEye from "../../svg-component/closedEye";
import Info from "../../svg-component/info";

const Input = ({ type, placeholder }) => {
  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} />
      {type === "password" ? <ClosedEye color="#474747" /> : <Info />}
    </div>
  );
};

export default Input;
