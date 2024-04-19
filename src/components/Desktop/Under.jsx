import React from "react";

export default function Under() {
  return (
    <div className="underDiv">
      <div className="underDiv1">
        <div className="underDiv2">
          <h1 className="underH1">Ready to start?</h1>
        </div>
        <div className="underDiv3">
          <input
            type="email"
            placeholder="Enter email address"
            className="underInput"
          />
          <button className="underButton">Schedule a Demo</button>
        </div>
      </div>
    </div>
  );
}
