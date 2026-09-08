import React from "react";
import { Icon } from "./icons.jsx";

export function Modal({ title, onClose, children }) {
  return <div className="overlay" role="presentation"><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button type="button" className="close-button" aria-label="Close modal" onClick={onClose}><Icon name="close" size={18} /></button><p className="overline">Focused decision</p><h2 id="modal-title">{title}</h2>{children}</div></div>;
}
