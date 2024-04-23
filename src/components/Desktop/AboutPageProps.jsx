import React from "react";

export default function AboutPageProps() {
  return (
    <div className="propsMainDiv">
      <Props2 satauri="Team Members" ricxvi="300+" />
      <Props2 satauri="Offices in the US" ricxvi="3" />
      <Props2 satauri="Transactions analyzed" ricxvi="10M+" />
    </div>
  );
}

function Props2(props) {
  return (
    <div className="props2">
      <hr />
      <h2 className="propsH2">{props.satauri}</h2>
      <p className="propsP">{props.ricxvi}</p>
      <hr />
    </div>
  );
}
