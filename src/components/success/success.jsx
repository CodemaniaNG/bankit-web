import React from "react";
import "./success.css";
import SuccessCheck from "../../svg-component/successCheck";

const Success = () => {
  return (
    <div className="success-container">
      <div className="first-ellipse">
        <div className="second-ellipse">
          <div className="third-ellipse">
            <SuccessCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
