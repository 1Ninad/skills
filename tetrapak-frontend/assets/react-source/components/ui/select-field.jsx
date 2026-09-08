import React, { useEffect, useRef, useState } from "react";
import { Icon } from "./icons.jsx";

export function SelectField({ options, value, onChange, id, "aria-label": ariaLabel }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => { if (ref.current && !ref.current.contains(event.target)) setOpen(false); };
    const handleEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => { document.removeEventListener("mousedown", handleOutsideClick); document.removeEventListener("keydown", handleEscape); };
  }, []);
  return <div className="select-wrap" ref={ref}><button id={id} type="button" className="input select select-trigger" role="combobox" aria-label={ariaLabel} aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen((isOpen) => !isOpen)}><span>{value}</span><Icon name="chevron-down" size={15} /></button>{open && <div className="select-menu" role="listbox" aria-label={ariaLabel}>{options.map((option) => <button type="button" className={`select-option ${option === value ? "selected" : ""}`} role="option" aria-selected={option === value} key={option} onClick={() => { onChange?.(option); setOpen(false); }}>{option}</button>)}</div>}</div>;
}
