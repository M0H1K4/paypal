import React from "react";
import MiddleImg from "../../payapi-multi-page-website/starter-code/assets/home/desktop/illustration-easy-to-implement.svg";

export default function middle() {
  return (
    <div className="middleDiv1">
      <div className="middleDiv2">
          <img className="imgdiv" src={MiddleImg} alt="" />
        <div className="middleTxts">
          <h1 className="middleH1">Easy to implement</h1>
          <h3 className="middleH3">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </h3>
        </div>
      </div>
    </div>
  );
}
