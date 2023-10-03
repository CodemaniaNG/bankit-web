import React from "react";
import "./powerUp.css";
import Rocket from "../../assets/rocket.png";
import Right from "../../svg-component/right";

const PowerUp = ({ action }) => {
  return (
    <div className="powerup-container" onClick={action}>
      <div className="powerup-img">
        <img src={Rocket} alt="rocket" />
      </div>
      <div className="powerup-text">
        <h2>Power up to Tier 1</h2>
        <p>Upgrade your account and do more on BankIT. Tap to proceed.</p>
      </div>
      <Right color="#245EF5" />
    </div>
  );
};

export default PowerUp;
