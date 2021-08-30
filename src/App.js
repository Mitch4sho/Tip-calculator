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
  };

  const handleTipUpdate = (value) => {
    console.log("tip updated", value);
    setActive(false);
  };

  const handlePeopleUpdate = (value) => {
    console.log("People updated");
  };

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
        <Output />
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mitchell</a>.
      </div>
    </div>
  );
}

export default App;
