import React from "react";

const TipButton = ({ value, onClick }) => {
  return (
    <div>
      <input
        className="btn"
        type="button"
        value={`${value}%`}
        onClick={() => onClick(value)}
      />
    </div>
  );
};

export default TipButton;
