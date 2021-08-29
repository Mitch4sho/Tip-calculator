import React, { useState } from "react";
import "./Bill.css";
import TipButton from "./TipButton";

const Bill = ({ onTipUpdate }) => {
  const [billVal, setBillVal] = useState(0);
  const [peopleVal, setPeopleVal] = useState(0);

  return (
    <form className="bill-form">
      <div className="form-control form-bill">
        <label>Bill</label>
        <input
          type="number"
          value={billVal}
          placeholder="Enter bill amount"
          onChange={(e) => setBillVal(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Select Tip %</label>
        <ul className="tip-selection">
          <TipButton value={5} onClick={onTipUpdate} />
          <TipButton value={10} onClick={onTipUpdate} />
          <TipButton value={15} onClick={onTipUpdate} />
          <TipButton value={25} onClick={onTipUpdate} />
          <TipButton value={50} onClick={onTipUpdate} />
          <input className="Custom" type="button" value="Custom" />
        </ul>
      </div>
      <div className="form-control">
        <label>Number of People</label>
        <input
          type="number"
          value={peopleVal}
          placeholder="Enter people"
          onChange={(e) => setPeopleVal(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Bill;
