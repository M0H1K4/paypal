import React from "react";

export default function Inputs() {
  return (
    <div className="inputs">
      <input placeholder="Name" type="text" className="input" required="" />
      <input placeholder="Email Adress" type="email" className="input" required="" />
      <input placeholder="Company Name" type="text" className="input" required="" />
      <input placeholder="Title" type="text" className="input" required="" />
      <input placeholder="Message" type="message" className="input" required="" />
    </div>
  );
}
