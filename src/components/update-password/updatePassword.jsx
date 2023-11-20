import React, { useState } from "react";
import "./updatePassword.css";
import SidePopup from "../side-popup/sidePopup";
import Input from "../input/input";
import PriButton from "../primary-button/priButton";
import ConfirmOtp from "../confirm-otp/confirmOtp";

const UpdatePassword = ({ right, closeAction }) => {
  const [left, setLeft] = useState("-700px");
  const [type, setType] = useState(false);
  const [active, setActive] = useState(false);
  const [type2, setType2] = useState(false);
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="update-password">
        <h2>Password</h2>
        <div className="update-password-cont">
          <Input
            text={true}
            placeholder="Old password"
            type={type ? "text" : "password"}
            iconChange={() => {
              setType(!type);
            }}
          />
          <Input
            text={true}
            placeholder="New password"
            type={type2 ? "text" : "password"}
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
        <PriButton
          text="Update password"
          active={active}
          action={() => {
            setLeft("0px");
          }}
        />
      </div>
      <ConfirmOtp
        title="Password"
        text="Confirm OTP"
        subText="A 5-digit code has been sent to 08098765432"
        right={left}
        closeAction={() => {
          setLeft("-700px");
        }}
      />
    </SidePopup>
  );
};

export default UpdatePassword;
