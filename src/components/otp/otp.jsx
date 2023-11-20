import React, { useState, useRef } from "react";
import "./otp.css";
import ClosedEye from "../../svg-component/closedEye";
import OpenEye from "../../svg-component/openEye";

const Otp = ({ completed, otp }) => {
  const [state, setState] = useState(false);
  const [value, setValue] = useState(["", "", "", "", "", ""]);
  const action = () => {
    setState(!state);
  };
  const otpInputs = useRef([]);
  const handleChange = (index, item) => {
    const newState = [...value];
    newState[index] = item;
    setValue(newState);
    const myOtp = newState.join("");
    if (item && index < value.length - 1) {
      const nextInput = otpInputs.current[index + 1];
      if (nextInput) {
        nextInput.focus(); // Move cursor to the next input if it exists
      }
    } else {
      otp(myOtp);
      completed();
    }
  };
  const handleInputKeyPress = (event, inputIndex) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      handleChange(inputIndex, "");

      if (inputIndex > 0) {
        const prevInput = otpInputs.current[inputIndex - 1];
        if (prevInput) {
          prevInput.focus(); // Move cursor to the previous input
        }
      }
    }
  };
  return (
    <div className="otp-container">
      <div className="otp-form">
        {value?.map((item, index) => {
          return (
            <input
              type={state ? "number" : "password"}
              value={item}
              key={index}
              maxLength={1}
              onChange={(e) => {
                handleChange(index, e.target.value);
              }}
              onKeyDown={(e) => {
                handleInputKeyPress(e, index);
              }}
              ref={(input) => input && (otpInputs.current[index] = input)}
            />
          );
        })}
        {/* <input type={state ? "number" : "password"} name="ssn-2" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-3" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-4" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-5" maxLength={1} onChange={handleChange} /> */}
      </div>
      {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
    </div>
  );
};

export default Otp;
