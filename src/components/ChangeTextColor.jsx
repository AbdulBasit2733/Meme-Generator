
import React, { useState } from "react";

const ChangeTextColor = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState(getColor);
  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };
  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );
};

export default ChangeTextColor;
