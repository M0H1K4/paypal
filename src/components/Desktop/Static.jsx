import React from "react";
import Finance from "../../payapi-multi-page-website/starter-code/assets/home/desktop/icon-personal-finances.svg";
import Banking from "../../payapi-multi-page-website/starter-code/assets/home/desktop/icon-banking-and-coverage.svg";
import Consumer from "../../payapi-multi-page-website/starter-code/assets/home/desktop/icon-consumer-payments.svg";

export default function Static() {
  return (
    <div className="staticGrid">
      <div className="staticGrid2">
        <div className="staticDiv">
          <img className="staticImg" src={Finance} alt="" />
          <h1 className="staticH1">Personal Finances</h1>
          <h4 className="staticH4">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </h4>
        </div>
        <div className="staticDiv">
          <img className="staticImg" src={Banking} alt="" />
          <h1 className="staticH1">Banking & Coverage</h1>
          <h4 className="staticH4">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </h4>
        </div>
        <div className="staticDiv">
          <img className="staticImg" src={Consumer} alt="" />
          <h1 className="staticH1">Consumer Payments</h1>
          <h4 className="staticH4">
            It's easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </h4>
        </div>
      </div>
    </div>
  );
}
