import React from "react";
import "./welcome.css";
import Header from "../header/header";
import Layout from "../../utils/layout/layout";
import PriButton from "../primary-button/priButton";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Header />
      <Layout>
        <div className="welcome-hero">
          <div className="welcome-text">
            <h2>Banking made just for you</h2>
            <p>Seamless Banking at your Fingertrips</p>
          </div>
          <div className="welcome-action">
            <div>
              <PriButton text="Get started" />
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Welcome;
