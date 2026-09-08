import React from "react";

export function Input({ multiline = false, ...props }) {
  return multiline ? <textarea className="input textarea" rows="4" {...props} /> : <input className="input" type="text" {...props} />;
}
