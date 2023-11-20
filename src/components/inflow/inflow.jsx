import React from "react";
import "./inflow.css";
import ArrowDown from "../../svg-component/arrowDown";
import ArrowUp from "../../svg-component/arrowUp";
import { formatter } from "../../utils/formatter/formatter";
import Decline from "../../svg-component/decline";
import Growth from "../../svg-component/growth";
import { ContributorsStyle } from "../../styles/contributors-style/contributorsLayout";
import Profile from "../../assets/profile-pic.png";

const Inflow = ({ type, amount, list }) => {
  return (
    <div className="inflow-container">
      <div className="inflow-header">
        <div className="inflow-arrow">
          {type === "Inflow" ? (
            <div className="purple">
              <ArrowDown />
            </div>
          ) : (
            <div className="orange">
              <ArrowUp />
            </div>
          )}
          <h2>{type}</h2>
        </div>
        <div className="inflow-amount">
          <h2>{formatter.format(amount)}</h2>
          {type === "Inflow" ? (
            <p className="decline">
              <Decline /> 15% down from last week
            </p>
          ) : (
            <p className="growth">
              <Growth /> 15% up from last week
            </p>
          )}
        </div>
      </div>
      <div className="inflow-line"></div>
      <div className="inflow-contributors">
        <h2>Top contributors</h2>
        <div className="inflow-cont">
          {list?.map((item, index) => {
            return (
              <div className="inflow-rectan" key={index}>
                <ContributorsStyle bgcolor={type === "Inflow" ? "#FCE8FC" : "#FEF7F0"} height={item.height}>
                  <p>{item.value}</p>
                </ContributorsStyle>
                <img src={Profile} alt="profile" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inflow;
