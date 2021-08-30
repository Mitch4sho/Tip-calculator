import React from "react";

const CustomTip = ({ customVal, onChange, onCustom, customActive }) => {
  return (
    <div>
      {!customActive ? (
        <input
          className="custom"
          type="button"
          onClick={() => onCustom(!customActive)}
          value="Custom"
          style={{ paddingRight: "0px", textAlign: "center" }}
        />
      ) : (
        <input
          className="custom"
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={customVal}
        />
      )}
    </div>
  );
};

export default CustomTip;
