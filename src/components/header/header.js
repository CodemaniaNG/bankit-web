import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Layout from "../../utils/layout/layout";

const Header = () => {
  return (
    <Layout>
      <div className="header-container">
        <div className="header-logo">
          <h2>
            Bank<span>It</span>
          </h2>
        </div>
        <div className="header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/open">Open an Account</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div className="header-action">
          <NavLink>Contact Us</NavLink>
          <button className="header-login">Login</button>
          <button className="header-signup">Sign up</button>
        </div>
      </div>
    </Layout>
  );
};

export default Header;
