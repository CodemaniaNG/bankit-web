import React from "react";
import "./verificationTier.css";
import Right from "../../svg-component/right";

const VerificationTier = ({ no, action }) => {
  return (
    <div className="verification-tier" onClick={action}>
      <div className="verificationtier-body">
        <h2>Tier {no}</h2>
        <div>
          <p>
            Daily Transfer Limit: <span>N100,000 </span>
          </p>
          <p>
            Max balance: <span>N100,000</span>
          </p>
        </div>
      </div>
      <Right color="#474747" />
    </div>
  );
};

export default VerificationTier;
