import React from "react";
import Phone from '../../payapi-multi-page-website/starter-code/assets/home/desktop/illustration-phone-mockup.svg'


export default function InfoTablet() {
  return (
    <div className="infoDivTablet">
      <img className="img1Tablet" src={Phone} alt="" />
      <div className="infoDiv2Tablet">
        <div className="txtsTablet">
          <h1 className="infoH1Tablet">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="inputButtonTablet">
            <input
              className="input1Tablet"
              type="email"
              placeholder="Enter email address"
            />
            <button className="infoButtonTablet">Schedule a Demo</button>
          </div>
          <h3 className="infoH3Tablet">Have any questions? Contact Us</h3>
        </div>
      </div>
    </div>
  );
}
