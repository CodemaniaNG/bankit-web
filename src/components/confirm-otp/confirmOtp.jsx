import React, { useState } from "react";
import "./confirmOtp.css";
import SidePopup from "../side-popup/sidePopup";
import PriButton from "../primary-button/priButton";
import Otp from "../otp/otp";

const ConfirmOtp = ({ right, closeAction, title, text, subText }) => {
  const [active, setActive] = useState(false);
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="confirm-otp">
        <h2>{title}</h2>
        <div className="confirm-otp-body">
          <div className="confirm-otp-header">
            <h2>{text}</h2>
            <p>{subText}</p>
          </div>
          <Otp
            completed={() => {
              setActive(true);
            }}
            otp={(e) => {
              console.log(e);
            }}
          />
          <div className="otp-duration">
            {title === "Reset PIN" ? null : (
              <>
                <p>00:00</p>
                <h3>
                  This code will expire in 3 minutes. Did not receive code? <br /> <span>Resend code</span>
                </h3>
              </>
            )}
          </div>
          <PriButton active={active} text="Next" />
        </div>
      </div>
    </SidePopup>
  );
};

export default ConfirmOtp;
