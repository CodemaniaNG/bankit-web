import React from "react";
import "./sendMoney.css";
import Info from "../../svg-component/info";

const SendMoney = () => {
  return (
    <div className="send-money">
      <div className="start-typing">
        <p>Start typing “@” to enter a username.</p>
      </div>
      <div className="step-one-single">
        <div>
          <input type="text" required />
          <span>Enter account number or Bankit username</span>
        </div>
        <Info />
      </div>
      <select>
        <option value="">Bank</option>
      </select>
    </div>
  );
};

export default SendMoney;
