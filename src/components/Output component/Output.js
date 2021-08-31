import React from "react";
import Total from "./Total.js";
import "./Output.css";

const Output = ({ bill, tip, people }) => {
  return (
    <div className="output-component">
      <section className="total-section">
        <Total value="Tip Amount" amount={4.27} />
        <Total value="Total" amount={32.78} />
      </section>
      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default Output;
