import React from "react";
import "./accountInfo.css";
import SidePopup from "../side-popup/sidePopup";
import Input from "../input/input";
import PriButton from "../primary-button/priButton";

const AccountInfo = ({ right, closeAction }) => {
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="account-info-cont">
        <h2>Account Information</h2>
        <div className="account-info-wrapper">
          <div className="account-info-details">
            <p>Edit Profile Photo</p>
          </div>
          <div className="account-info-form">
            <Input type="text" placeholder="Username" text={false} edit={true} value="@Adolfus" />
            <Input type="text" placeholder="First name" text={false} edit={true} value="Adam" />
            <Input type="text" placeholder="Last name" text={false} edit={true} value="Adolf" />
            <Input type="number" placeholder="Phone number" text={false} edit={true} value="08098765432" />
            <Input type="email" placeholder="Email address" text={false} edit={true} value="adolfadam@bankit.com" />
          </div>
          <PriButton text="Next" active={false} />
        </div>
      </div>
    </SidePopup>
  );
};

export default AccountInfo;
