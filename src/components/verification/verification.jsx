import React, { useState } from "react";
import "./verification.css";
import SidePopup from "../side-popup/sidePopup";
import VerificationTier from "../verification-tier/verificationTier";
import TierUpgrade from "../tier-upgrade/tierUpgrade";

const Verification = ({ right, closeAction }) => {
  const [rights, setRights] = useState("-700px");
  const action = () => setRights("0px");
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="verification-container">
        <h2>Verification</h2>
        <div className="verification-cont">
          <div className="verification-current">
            <p>Your are currently on:</p>
            <h2>Tier 0</h2>
          </div>
          <div className="verification-body">
            <h2>Upgrade to do more:</h2>
            <VerificationTier no={1} action={action} />
            <VerificationTier no={2} action={action} />
            <VerificationTier no={3} action={action} />
          </div>
        </div>
      </div>
      <TierUpgrade right={rights} action={() => setRights("-700px")} />
    </SidePopup>
  );
};

export default Verification;
