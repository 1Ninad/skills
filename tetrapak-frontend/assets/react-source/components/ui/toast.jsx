import React from "react";
import { Icon } from "./icons.jsx";

export function Toast({ tone = "success", children, onClose }) {
  return <div className={`toast toast-${tone}`} role="status"><span className="toast-icon"><Icon name={tone === "success" ? "check" : "info"} size={16} /></span><span>{children}</span><button type="button" aria-label="Close notification" onClick={onClose}><Icon name="close" size={16} /></button></div>;
}
