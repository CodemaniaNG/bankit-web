import React from "react";
import "./cardsSuccess.css";
import SidePopup from "../side-popup/sidePopup";
import Card from "../../assets/atm-card.png";
import SettingsSvg from "../../svg-component/settingsSvg";
import Right from "../../svg-component/right";
import Block from "../../svg-component/block";

const CardsSuccess = ({ right, closeAction }) => {
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="cards-success">
        <h2>Cards</h2>
        <img src={Card} alt="card" />
        <h3>View details</h3>
        <div className="cards-success-wrapper">
          <div className="cards-success-single">
            <div>
              <SettingsSvg color="#999999" />
              <h2>Manage card</h2>
            </div>
            <Right color="#999999" />
          </div>
          <div className="cards-success-single">
            <div>
              <Block />
              <h2>Block card</h2>
            </div>
            <Right color="#999999" />
          </div>
        </div>
      </div>
    </SidePopup>
  );
};

export default CardsSuccess;
