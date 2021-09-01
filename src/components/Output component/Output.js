import React from "react";
import Total from "./Total.js";
import "./Output.css";

const Output = ({ bill, tip, people, resetState }) => {
  let totalTip = bill * tip;
  let totalBill = bill + totalTip;
  let tipPerPerson = (bill * tip) / people;
  let billPerPerson = totalBill / people;

  return (
    <div className="output-component">
      <section className="total-section">
        <Total value="Tip Amount" amount={tipPerPerson} />
        <Total value="Total" amount={billPerPerson} />
      </section>
      <button className="reset-btn" onClick={resetState}>
        RESET
      </button>
    </div>
  );
};

export default Output;
