import React from "react";
import { Icon } from "./icons.jsx";

export function Button({ children, variant = "primary", icon, disabled = false, type = "button", ...props }) {
  return <button className={`button button-${variant}`} disabled={disabled} type={type} {...props}>{children}{icon && <Icon name={icon} size={16} />}</button>;
}
