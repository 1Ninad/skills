import React, { useState } from "react";

export function RadioGroup({ options, defaultValue }) {
  const [value, setValue] = useState(defaultValue || options[0]);
  return <div className="radio-group">{options.map((option) => <label className="choice" key={option}><input type="radio" name="demo-radio" value={option} checked={value === option} onChange={() => setValue(option)} /><span className="radio-circle" /><span>{option}</span></label>)}</div>;
}
