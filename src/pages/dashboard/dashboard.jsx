import React, { useState } from "react";
import "./dashboard.css";
import DashboardLayout from "../../utils/dashboard-layout/dashboardLayout";
import PowerUp from "../../components/power-up/powerUp";
import AccountSummary from "../../components/account-summary/accountSummary";
import SendMoney from "../../components/send-money/sendMoney";
import Beneficiaries from "../../components/beneficiaries/beneficiaries";
import Services from "../../components/services/services";
import TierUpgrade from "../../components/tier-upgrade/tierUpgrade";
import User from "../../svg-component/user";
import Contact from "../../svg-component/contact";
import FundWallet from "../../components/fund-wallet/fundWallet";
import FundSuccess from "../../components/fund-success/fundSuccess";

const Dashboard = () => {
  const [right, setRight] = useState("-700px");
  const [right2, setRight2] = useState("-700px");
  const [right3, setRight3] = useState("-700px");
  const array = [];
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="dashboard-first">
          <PowerUp
            action={() => {
              setRight("0px");
            }}
          />
          <AccountSummary
            fundAction={() => {
              setRight2("0px");
            }}
          />
          <SendMoney />
        </div>
        <div className="dashboard-second">
          <Services />
          <Beneficiaries title="Recent beneficiaries" img={<User />} array={array} />
          <Beneficiaries title="Saved contacts" img={<Contact />} array={array} />
        </div>
      </div>
      <TierUpgrade
        right={right}
        action={() => {
          setRight("-700px");
        }}
      />
      <FundWallet
        right={right2}
        closeAction={() => {
          setRight2("-700px");
        }}
        fundAction={() => {
          setRight3("0px");
        }}
      />
      <FundSuccess
        right={right3}
        closeAction={() => {
          setRight3("-700px");
        }}
        action={() => {
          setRight3("-700px");
          setRight2("-700px");
        }}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
