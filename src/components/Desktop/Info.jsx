import React from "react";
import Phone from "../../payapi-multi-page-website/starter-code/assets/home/desktop/illustration-phone-mockup.svg";
import InfoTablet from "../Tablet/InfoTablet";

export default function Info() {
  return (
    <>
      <InfoTablet/> 
      <div className="infoDiv">
        <div className="infoDiv2">
          <div className="txts">
            <h1 className="infoH1">
              Start building with our APIs for absolutely free.
            </h1>
            <div className="inputButton">
              <input
                className="input1"
                type="email"
                placeholder="Enter email address"
              />
              <button className="infoButton">Schedule a Demo</button>
            </div>
            <h3 className="infoH3">Have any questions? Contact Us</h3>
          </div>
          <img className="img1" src={Phone} alt="" />
        </div>
      </div>
    </>
  );
}
