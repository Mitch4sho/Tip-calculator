import React, { useState } from "react";
import "./Bill.css";
import TipButton from "./TipButton";
import CustomTip from "./CustomTip";

const Bill = ({
  onTipUpdate,
  onBillUpdate,
  onPeopleUpdate,
  onCustom,
  active,
}) => {
  const [billVal, setBillVal] = useState(0);
  const [peopleVal, setPeopleVal] = useState(0);
  const [customVal, setCustomVal] = useState(0);
  const [errorPeople, setErrorPeople] = useState(false);
  const [errorBill, setErrorBill] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (peopleVal === 0) {
      setErrorPeople(true);
      return;
    } else {
      setErrorPeople(false);
    }

    if (billVal === 0) {
      setErrorBill(true);
      return;
    } else {
      setErrorBill(false);
    }

    onBillUpdate(billVal);
    onPeopleUpdate(peopleVal);
    if (active) {
      onTipUpdate(customVal);
    }

    setBillVal(0);
    setPeopleVal(0);
    setCustomVal(0);
    setErrorBill(false);
    setErrorPeople(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(e);
    }
  };


  return (
    <form className="bill-form" onKeyDown={(e) => onKeyDown(e)}>
      <div className="form-control form-bill">
        <div className="labels">
          <label>Bill</label>
          {errorBill ? (
            <label style={{ color: "red" }}>Enter a Bill</label>
          ) : (
            ""
          )}
        </div>
        <input
          type="number"
          value={billVal}
          placeholder="Enter bill amount"
          onChange={(e) => setBillVal(e.target.value)}
          required
          style={{ border: errorBill ? "2px solid red" : "" }}
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
      <div className="form-control form-people">
        <div className="labels">
          <label>Number of People</label>
          {errorPeople ? (
            <label style={{ color: "red" }}>Can't be zero</label>
          ) : (
            ""
          )}
        </div>
        <input
          type="number"
          value={peopleVal}
          placeholder="Enter people"
          onChange={(e) => setPeopleVal(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
          required
          style={{ border: errorPeople ? "2px solid red" : "" }}
        />
      </div>
    </form>
  );
};

export default Bill;
