import React from "react";

export default function Info() {
  return (
    <div className="infoDiv">
      <h1 className="infoH1">
        Start building with our APIs for absolutely free.
      </h1>
      <div className="infoDivInputButton">
        <input className="infoDivInput" placeholder="Enter email address" type="email" />
        <button className="infoDivButton" >Schedule a Demo</button>
      </div>
      <h4 className="infoDivH4">Have any questions?  Contact Us</h4>
    </div>
  );
}
