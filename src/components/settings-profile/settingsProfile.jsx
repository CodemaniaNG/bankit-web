import React from "react";
import "./settingsProfile.css";
import User from "../../assets/user-img.png";
import TierBadge from "../../svg-component/tier";
import Badges from "../../svg-component/badges";
import Right from "../../svg-component/right";

const SettingsProfile = () => {
  return (
    <div className="settings-profile">
      <div className="settings-user">
        <img src={User} alt="user" />
        <div>
          <h2>Adam adolf</h2>
          <p>@Adolfus</p>
        </div>
      </div>
      <div className="tier-level">
        <TierBadge />
        <h2>You are currently on tier 1</h2>
      </div>
      <div className="view-badges">
        <Badges />
        <h2>View badges</h2>
        <Right color="white" />
      </div>
    </div>
  );
};

export default SettingsProfile;
