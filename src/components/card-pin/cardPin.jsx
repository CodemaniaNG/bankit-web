import React, { useState } from "react";
import "./cardPin.css";
import SidePopup from "../side-popup/sidePopup";
import PriButton from "../primary-button/priButton";
import Input from "../input/input";

const CardPin = ({ right, btnAction, closeAction }) => {
  const [active, setActive] = useState(false);
  const [type, setType] = useState(false);
  const [type2, setType2] = useState(false);
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="cardpin-container">
        <div className="cardpin-wrapper">
          <div className="cardpin-header">
            <h2>Create Card Pin</h2>
            <p>Set up a PIN to use your card</p>
          </div>
          <div className="cardpin-form">
            <Input
              type={type ? "text" : "password"}
              text={true}
              placeholder="Enter PIN"
              iconChange={() => {
                setType(!type);
              }}
            />
            <Input
              type={type2 ? "text" : "password"}
              text={true}
              placeholder="Confirm PIN"
              iconChange={() => {
                setType2(!type2);
              }}
              action={(e) => {
                if (e.target.value.length > 0) {
                  setActive(true);
                } else {
                  setActive(false);
                }
              }}
            />
          </div>
        </div>
        <PriButton text="Next" active={active} action={btnAction} />
      </div>
    </SidePopup>
  );
};

export default CardPin;
