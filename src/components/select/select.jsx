import React, { useState } from "react";
import "./select.css";
import OutsideClick from "../outside-click/outsideClick";
import BankList from "../bank-list/bankList";
import CaretDown from "../../svg-component/caret-down";
import CaretUp from "../../svg-component/caret-up";

const Select = ({ array, title }) => {
  const [bankState, setBankState] = useState(false);
  const [bank, setBank] = useState("");
  return (
    <div className="send-money-bank">
      <OutsideClick
        onClickOutside={() => {
          setBankState(false);
        }}>
        <div
          className="send-money-container"
          onClick={() => {
            setBankState(!bankState);
          }}>
          <div>
            <p>{title}</p>
            {bankState || bank !== "" ? <h2>{bank}</h2> : null}
          </div>
          {bankState ? <CaretUp /> : <CaretDown />}
        </div>
        {bankState ? (
          <BankList
            action={(e) => {
              setBank(e.target.outerText);
              setBankState(false);
            }}
            array={array}
          />
        ) : null}
      </OutsideClick>
    </div>
  );
};

export default Select;
