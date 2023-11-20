import React from "react";
import "./input.css";
import ClosedEye from "../../svg-component/closedEye";
import Info from "../../svg-component/info";
import OpenEye from "../../svg-component/openEye";

const Input = ({ type, placeholder, text, action, iconChange, edit, value }) => {
  return (
    <div className="step-one-single">
      <div>
        {edit ? (
          <>
            <input required type={type} onChange={action} value={value} readOnly className="readonly" />
            <span>{placeholder}</span>
          </>
        ) : (
          <>
            <input type={type} placeholder=" " onChange={action} />
            <span>{placeholder}</span>
          </>
        )}
      </div>
      {text ? type === "password" ? <ClosedEye color="#474747" action={iconChange} /> : <OpenEye color="#474747" action={iconChange} /> : <Info />}
    </div>
  );
};

export default Input;
