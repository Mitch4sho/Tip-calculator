import React from "react";

const Total = ({ value, amount }) => {
  return (
    <div className="total-container">
      <div>
        <h4>{value}</h4>
        <p>/ person</p>
      </div>
      <div className="total-value">{amount ? `$${Math.round(amount)}` : 0}</div>
    </div>
  );
};

export default Total;
