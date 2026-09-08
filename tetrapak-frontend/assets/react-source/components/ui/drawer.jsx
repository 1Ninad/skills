import React from "react";
import { Icon } from "./icons.jsx";

export function Drawer({ title, onClose, children }) {
  return <div className="drawer-overlay" role="presentation"><aside className="drawer" aria-label={title}><div className="drawer-header"><div><p className="overline">Details</p><h2>{title}</h2></div><button type="button" className="close-button" aria-label="Close drawer" onClick={onClose}><Icon name="close" size={18} /></button></div>{children}</aside></div>;
}
