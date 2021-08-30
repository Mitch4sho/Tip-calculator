import React, { useState } from "react";
import "./Bill.css";
import TipButton from "./TipButton";
import CustomTip from "./CustomTip";

const Bill = ({ onTipUpdate, onCustom, active }) => {
  const [billVal, setBillVal] = useState(0);
  const [peopleVal, setPeopleVal] = useState(0);
  const [customVal, setCustomVal] = useState(0);

  const onSubmit = (e) => {
    if (peopleVal === 0) {
    }
  };

  return (
    <form className="bill-form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-control form-bill">
        <label>Bill</label>
        <input
          type="number"
          value={billVal}
          placeholder="Enter bill amount"
          onChange={(e) => setBillVal(e.target.value)}
          required
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
          <CustomTip
            customVal={customVal}
            onChange={setCustomVal}
            onCustom={onCustom}
            customActive={active}
          />
        </ul>
      </div>
      <div className="form-control">
        <div className="labels">
          <label>Number of People</label>
          <label>Can't be zero</label>
        </div>
        <input
          type="number"
          value={peopleVal}
          placeholder="Enter people"
          onChange={(e) => setPeopleVal(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default Bill;
