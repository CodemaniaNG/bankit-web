import React, { useState } from "react";
import "./accountSummary.css";
import OpenEye from "../../svg-component/openEye";
import ClosedEye from "../../svg-component/closedEye";
// import { formatter } from "../../utils/formatter/formatter";
import Copy from "../../svg-component/copy";
import Plus from "../../svg-component/plus/plus";

const AccountSummary = ({ fundAction }) => {
  const [state, setState] = useState(false);
  const action = () => {
    setState(!state);
  };
  //   const [amount, setAmount] = useState(0);
  return (
    <div className="account-summary-container">
      <div className="summary-container">
        <div className="summary-wrapper">
          <div className="total-balance">
            <h2>Total Balance</h2>
            {state ? <OpenEye action={action} color="white" /> : <ClosedEye action={action} color="white" />}
          </div>
          <div className="balance">
            <h1> N </h1>
            <h2>{state ? "7,000,000.00" : "****"}</h2>
          </div>
        </div>
        <div className="account-number">
          <p>09287282929</p>
          <Copy />
        </div>
      </div>
      <div className="action-container">
        <Plus color="#E6E6E6" /> <h2 onClick={fundAction}>Fund wallet</h2>
      </div>
    </div>
  );
};

export default AccountSummary;
