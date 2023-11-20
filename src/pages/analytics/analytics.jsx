import React from "react";
import "./analytics.css";
import DashboardLayout from "../../utils/dashboard-layout/dashboardLayout";
import DashboardAnalytics from "../../components/dashboard-analytics/dashboard-analytics";
import Inflow from "../../components/inflow/inflow";
import { list } from "../../utils/data";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="analytics-page">
        <h2>Analytics</h2>
        <DashboardAnalytics page={true} />
        <div className="inflow-outlfow">
          <Inflow type="Inflow" amount={20000000} list={list} />
          <Inflow type="Outflow" amount={250000} list={list} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
