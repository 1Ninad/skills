import React, { useEffect, useRef } from "react";
import { Button } from "./button.jsx";
import { Icon } from "./icons.jsx";

export function DropdownMenu({ label, open, onToggle, onClose, children }) {
  const ref = useRef(null);
  useEffect(() => { const handleClick = (event) => { if (ref.current && !ref.current.contains(event.target)) onClose(); }; document.addEventListener("mousedown", handleClick); return () => document.removeEventListener("mousedown", handleClick); }, [onClose]);
  return <div className="dropdown" ref={ref}><Button variant="secondary" onClick={onToggle}>{label}<Icon name="chevron-down" size={14} /></Button>{open && <div className="dropdown-menu">{children}</div>}</div>;
}
