import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./stepOne.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import PriButton from "../../primary-button/priButton";
import Info from "../../../svg-component/info";
import ClosedEye from "../../../svg-component/closedEye";
import OpenEye from "../../../svg-component/openEye";
import Checked from "../../../svg-component/checked";
import Unchecked from "../../../svg-component/unchecked";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import { useSendOtpMutation } from "../../../redux/api/mutationApi";

const StepOne = ({ submit }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [sendOtp, { data: otpSend, isLoading: newOtpLoad, isSuccess: newOtpSuccess, isError: newOtpFalse, error: newOtpErr, reset: newOtpReset }] = useSendOtpMutation();
  useEffect(() => {
    if (newOtpSuccess) {
      if (otpSend) {
        console.log(otpSend);

        //  setCookie("accessToken", otpSend?.accessToken);
        //  if (getCookie("accessToken")) {
        submit(getValues());
        //  }
      }
    }
  }, [otpSend, newOtpSuccess, submit]);
  useEffect(() => {
    if (newOtpFalse) {
      if (newOtpErr) {
        console.log(newOtpErr);
      }
    }
  }, [newOtpErr, newOtpFalse]);
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [digits, setDigits] = useState(false);
  const [active, setActive] = useState(false);
  const action = () => {
    setState(!state);
  };
  const handlePwd = (e) => {
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
      })
    ) {
      setSymbol(true);
    } else {
      setSymbol(false);
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setDigits(true);
    } else {
      setDigits(false);
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div className="step-one-container">
      <div className="back-button">
        <ArrowLeft
          action={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="step-one-body">
        <OnboardingHeader title="Get Started" text="Enter your details to create a Bankit account" />
        <form
          onSubmit={handleSubmit((e) => {
            // e.preventDefault();
            const data = {
              phoneNumber: e.phoneNumber,
            };
            sendOtp(data);
          })}>
          <div className="step-one-form">
            <div className="step-one-group">
              <div className="step-one-groups">
                <div className="step-one-single">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder=" "
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    <span>First name</span>
                  </div>
                  <Info />
                </div>
                {errors.firstName ? <p>{errors?.firstName?.message}</p> : null}
              </div>
              <div className="step-one-groups">
                <div className="step-one-single">
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder=" "
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    <span>Last name</span>
                  </div>
                  <Info />
                </div>
                {errors.lastName ? <p>{errors?.lastName?.message}</p> : null}
              </div>
              <div className="step-one-groups">
                <div className="step-one-single">
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder=" "
                      {...register(
                        "phoneNumber",
                        {
                          required: "Phone Number is required",
                        },
                        {
                          maxLength: 11,
                        }
                      )}
                    />
                    <span>Phone number</span>
                  </div>
                  <Info />
                </div>
                {errors.phoneNumber ? <p>{errors?.phoneNumber?.message}</p> : null}
              </div>
              <div className="step-one-groups">
                <div className="step-one-single">
                  <div>
                    <input
                      type={state ? "text" : "password"}
                      name="password"
                      placeholder=" "
                      onInput={handlePwd}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <span>Password</span>
                  </div>
                  {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
                </div>
                {errors.password ? <p>{errors?.password?.message}</p> : null}
              </div>
            </div>
            <div className="step-one-hint">
              <h2>Password should have:</h2>
              <div className="step-hint-container">
                <div className="step-hint-double">
                  <div className="step-hint-single">
                    {uppercase ? <Checked /> : <Unchecked />} <p>At least one uppercase</p>
                  </div>
                  <div className="step-hint-single">
                    {numbers ? <Checked /> : <Unchecked />} <p>At least six characters</p>
                  </div>
                </div>
                <div className="step-hint-double">
                  <div className="step-hint-single">
                    {symbol ? <Checked /> : <Unchecked />} <p>At least one symbol</p>
                  </div>
                  <div className="step-hint-single">
                    {digits ? <Checked /> : <Unchecked />} <p>At least one digit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PriButton text="Next" active={active} load={newOtpLoad} />
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            navigate("/auth/login");
          }}>
          Log in
        </span>
      </p>
    </div>
  );
};

export default StepOne;
