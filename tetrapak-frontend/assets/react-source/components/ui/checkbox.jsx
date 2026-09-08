import React, { useState } from "react";
import { Icon } from "./icons.jsx";

export function Checkbox({ label, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);
  return <label className="choice"><input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><span className="choice-box"><Icon name="check" size={14} /></span><span>{label}</span></label>;
}
