import React from "react";
import "./onboardingLayout.css";
import Slider from "react-slick";
import One from "../../assets/onboarding1.png";
import Two from "../../assets/onboarding2.png";
import Three from "../../assets/onboarding3.png";
import Fourth from "../../assets/onboarding4.png";
import Fifth from "../../assets/onboarding5.png";
import Qr from "../../svg-component/qr";
import GooglePlay from "../../svg-component/googlePlay";
import AppleStore from "../../svg-component/appleStore";

const Onboardinglayout = ({ children, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="onboarding-layout-container">
      <div className={type === "final" ? "onboarding-layout-first" : "onboarding-layout-image"}>
        {type === "final" ? (
          <div className="onboarding-layout-family">
            <div className="onboarding-layout-text">
              <Qr />
              <h2>Download our app with QR Code</h2>
              <p>Scan this code with your phone camera to download our app instantly.</p>
            </div>
            <div className="appstore-buttons">
              <GooglePlay />
              <AppleStore />
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            <img src={One} alt="one" />
            <img src={Two} alt="two" />
            <img src={Three} alt="two" />
            <img src={Fourth} alt="Fourth" />
            <img src={Fifth} alt="Fifth" />
          </Slider>
        )}
      </div>
      <div className="onboarding-layout-body">
        <div className="onboarding-layout-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Onboardinglayout;
