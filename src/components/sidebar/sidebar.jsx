import React from "react";
import "./sidebar.css";
import Logo from "../../svg-component/logo";
import { sidebarData } from "../../utils/data";
import { NavLink } from "react-router-dom";

const Sidebar = ({ action, action2 }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-cont">
        <Logo />
        <div className="sidebar-links">
          {sidebarData?.links?.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                <div className="sidebar-single">
                  {item.img}
                  <p>{item.text}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="sidebar-wrapper">
        {sidebarData?.subLinks?.map((item, index) => {
          return (
            <div className={item.text === "Logout" ? "sidebar-single logout" : "sidebar-single"} key={index} onClick={item.text === "Help Center" ? action : action2}>
              {item.img}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
