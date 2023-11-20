import React, { useState } from "react";
import "./bankList.css";
import Search from "../../svg-component/search";
import GTB from "../../assets/gtb.png";

const BankList = ({ action, array }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="banklist-container">
      <div className="banklist-search">
        <Search />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {array
        ?.filter((items) => items.toLowerCase().includes(search.toLowerCase()))
        ?.map((item, index) => {
          return (
            <div className="banklist-single" key={index}>
              <div>
                <img src={GTB} alt="gtb" />
              </div>
              <p onClick={action}>{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default BankList;
