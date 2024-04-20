import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="pricingDiv__1">
        {/* <h1 className="pricingH1__1">Pricing</h1> */}
        <div className="pricingDiv__3">
          <Props
            name="Free Plan"
            name2=" Build and test using our core set of products with up to 100 API
          requests."
            price="$0.00"
          />
          <Props
            name="Basic Plan"
            name2=" Launch your project with unlimited requests and no contractual minimums "
            price="$249.00"
          />
          <Props
            name="Premium Plan"
            name2=" Get tailored solutions, volume pricing, and dedicated support for your team "
            price="$499.00"
          />
        </div>
      </div>
    </>
  );
}

function Props(props) {
  return (
    <div className="pricingDiv__2">
      <div className="pricingDiv2">
        <h1 className="pricingH1__2">{props.name}</h1>
        <h3 className="pricingH3__1">{props.name2}</h3>
        <h1 className="pricingH1__3">{props.price}</h1>
      </div>
      <hr />
      <div className="lists">
        <ul className="ul__1">
          <li>Transactions</li>
          <li>Auth</li>
          <li>Identity</li>
          <li>Investments</li>
          <li>Assets</li>
          <li>Liabilities</li>
          <li>Income</li>
        </ul>
      </div>
      <hr />
      <button className="pricingButton__1">Request Access</button>
    </div>
  );
}
