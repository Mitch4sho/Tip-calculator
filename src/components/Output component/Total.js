import React from "react";

const Total = ({ value }) => {
  return (
    <div className="total-container">
      <div>
        <p>{value}</p>
        <p>/ person</p>
      </div>
      <h1>$4.27</h1>
    </div>
  );
};

export default Total;
