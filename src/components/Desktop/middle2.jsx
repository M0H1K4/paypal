import React from "react";
import Middle2Img from '../../payapi-multi-page-website/starter-code/assets/home/desktop/illustration-simple-ui.svg'

export default function middle2() {
  return (
    <div className="middleDiv1">
      <div className="middleDiv2">
        <div className="middle2Txts">
          <h1 className="middleH1">Simple UI & UX</h1>
          <h3 className="middleH3">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </h3>
        </div>
        
        <img src={Middle2Img} alt="" />
      </div>
    </div>
  );
}
