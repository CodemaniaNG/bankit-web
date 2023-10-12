import React, { useState } from "react";
import "./moreAction.css";
import ThreeDots from "../../svg-component/threeDot";
// import OutsideClick from "../outside-click/outsideClick";
import Overlay from "../overlay/overlay";
import ReportTransaction from "../report-transaction/reportTransaction";

const MoreAction = () => {
  const [action, setAction] = useState(false);
  const [right, setRight] = useState("-700px");
  return (
    <div className="moreaction-container">
      <ThreeDots
        action={() => {
          setAction(true);
        }}
      />
      {action ? (
        // <OutsideClick
        //   onClickOutside={() => {
        //     setAction(false);
        //   }}>
        <>
          <Overlay overlay={action}></Overlay>
          <div className="action-cts">
            <div className="action-cta">
              <p
                onClick={() => {
                  setAction(false);
                  setRight("0px");
                }}>
                Report Transaction
              </p>
              <p>View receipt</p>
            </div>
          </div>
        </>
      ) : // </OutsideClick>
      null}
      <ReportTransaction right={right} />
    </div>
  );
};

export default MoreAction;
