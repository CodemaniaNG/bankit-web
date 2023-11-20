import React, { useState } from "react";
import "./getAirtime.css";
import SidePopup from "../side-popup/sidePopup";
import Beneficiaries from "../beneficiaries/beneficiaries";
import Select from "../select/select";
import { airtimeList } from "../../utils/data";
import Input from "../input/input";
import PriButton from "../primary-button/priButton";

const GetAirtime = ({ right, closeAction, action }) => {
  const [active, setActive] = useState(false);
  const array = ["08028310501", "08028310501", "08028310501", "08028310501", "08028310501"];
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="get-airtime">
        <h2>Buy Airtime</h2>
        <div>
          <Beneficiaries page={true} array={array} title="Recent beneficiaries" />
          <Beneficiaries page={true} array={array} title="Saved contacts" />
        </div>
        <div>
          <Select array={airtimeList} title="Choose network" />
          <Input type="tel" placeholder="Phone number" text={false} />
          <Input
            type="number"
            placeholder="Amount"
            text={false}
            action={() => {
              setActive(true);
            }}
          />
        </div>
        <PriButton text="Buy" active={active} action={action} />
      </div>
    </SidePopup>
  );
};

export default GetAirtime;
