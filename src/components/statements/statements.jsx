import React, { useState } from "react";
import "./statements.css";
import SidePopup from "../side-popup/sidePopup";
import PriButton from "../primary-button/priButton";
import Input from "../input/input";
import CaretDown from "../../svg-component/caret-down";
import Pdf from "../../svg-component/pdf";
import Csv from "../../svg-component/csv";
import CaretUp from "../../svg-component/caret-up";

const Statements = ({ right, closeAction }) => {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="statements-container">
        <div className="statements-wrapper">
          <h2>Statements And Reports</h2>
          <div className="statements-cont">
            <div className="statements-text">
              <h2>Request Report</h2>
              <p>Get detailed transaction report about your account</p>
            </div>
            <div className="statements-form">
              <div className="statements-formats">
                <div
                  className="statements-format"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}>
                  <div>
                    <p>Format</p>
                    <h2>PDF</h2>
                  </div>
                  {dropdown ? <CaretUp /> : <CaretDown />}
                </div>
                {dropdown ? (
                  <div className="statements-dropdown">
                    <div className="statements-single">
                      <Pdf />
                      <h2>PDF</h2>
                    </div>
                    <div className="statements-single">
                      <Csv />
                      <h2>CSV file</h2>
                    </div>
                  </div>
                ) : null}
              </div>
              <Input text={false} type="text" placeholder="Start date" />
              <Input
                text={false}
                type="text"
                placeholder="End date"
                action={() => {
                  setActive(true);
                }}
              />
            </div>
          </div>
        </div>
        <PriButton text="Next" active={active} />
      </div>
    </SidePopup>
  );
};

export default Statements;
