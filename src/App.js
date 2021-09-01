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
    setBill(parseInt(value));
  };

  const handleTipUpdate = (value) => {
    setTip(parseInt(value) * 0.01);
    setActive(false);
  };

  const handlePeopleUpdate = (value) => {
    setPeople(parseInt(value));
  };

  // Reset tp initial state
  const handleResetState = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
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
        <Output
          bill={bill}
          tip={tip}
          people={people}
          resetState={handleResetState}
        />
      </div>
    </div>
  );
}

export default App;
