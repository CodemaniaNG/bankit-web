import React, { useState, useEffect } from "react";
import "./stepThree.css";
import PriButton from "../../primary-button/priButton";
import ArrowLeft from "../../../svg-component/arrowLeft";
import Info from "../../../svg-component/info";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import { useRegisterNewUserMutation } from "../../../redux/api/mutationApi";
import { useSelector } from "react-redux";

const StepThree = ({ back, forward }) => {
  const [active, setActive] = useState(false);
  const suggesstions = ["@adolf", "@adam", "@aadolfus"];
  const [value, setValue] = useState("");
  const profile = useSelector((state) => state.profile);
  const [registerNewUser, { data: registerUser, isLoading: newUserLoad, isSuccess: newUserSuccess, isError: newUserFalse, error: newUserErr }] = useRegisterNewUserMutation();
  useEffect(() => {
    if (newUserSuccess) {
      if (registerUser) {
        console.log(registerUser);

        //  setCookie("accessToken", registerUser?.accessToken);
        //  if (getCookie("accessToken")) {
        forward();
        //  }
      }
    }
  }, [registerUser, newUserSuccess, forward]);
  useEffect(() => {
    if (newUserFalse) {
      if (newUserErr) {
        console.log(newUserErr);
      }
    }
  }, [newUserErr, newUserFalse]);
  return (
    <div className="stepthree-container">
      <div className="stepthree-wrapper">
        <div className="back-button">
          <ArrowLeft action={back} />
        </div>
        <div className="stepthree-cont">
          <OnboardingHeader title="Just One More Thing..." text="Create your Bankit User name" />
          <div className="step-one-single">
            <div>
              <input
                type="text"
                required
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setActive(true);
                  // setSuggestions((arr) => [...arr, e.target.value]);
                }}
              />
              <span>Create a username</span>
            </div>
            <Info />
          </div>
        </div>
        <div className="stepthree-suggestions">
          {suggesstions?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setValue(item);
                  setActive(true);
                }}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <PriButton
        text="Next"
        active={active}
        action={() => {
          const data = {
            password: profile.password,
            phone: profile.phoneNumber,
            firstName: profile.firstName,
            lastName: profile.lastName,
            username: value,
          };
          registerNewUser(data);
        }}
        load={newUserLoad}
      />
    </div>
  );
};

export default StepThree;
