import React, { useState } from "react";
import Bill from "./components/Bill component/Bill";
import Output from "./components/Output component/Output";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  // for custom tip
  const [active, setActive] = useState(false);

  const handleBillUpdate = (value) => {
    console.log("bill updated");
    setBill(value);
  };

  const handleTipUpdate = (value) => {
    console.log("tip updated");
    setTip(value * 0.1);
    setActive(false);
  };

  const handlePeopleUpdate = (value) => {
    console.log("People updated");
    setPeople(value);
  };

  // Reset tp initial state

  return (
    <div className="app">
      <div className="header">
        <h1>Spli</h1>
        <h1>tter</h1>
      </div>
      <div className="container">
        <Bill
          onTipUpdate={handleTipUpdate}
          onBillUpdate={handleBillUpdate}
          onPeopleUpdate={handlePeopleUpdate}
          onCustom={setActive}
          active={active}
        />
        <Output bill={bill} tip={tip} people={people} />
      </div>
    </div>
  );
}

export default App;
