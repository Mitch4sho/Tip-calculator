import React from "react";
import Total from "./Total.js";
import "./Output.css";

const Output = () => {
  return (
    <div className="output-component">
      <Total value="Tip Amount" />
      <Total value="Total" />
      <button className="reset-btn">Reset</button>
    </div>
  );
};

export default Output;
