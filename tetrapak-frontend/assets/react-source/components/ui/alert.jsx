import React from "react";
import { Icon } from "./icons.jsx";

export function Alert({ tone, title, children }) {
  return <div className={`alert alert-${tone}`} role="status"><Icon name={tone === "error" || tone === "warning" ? "alert" : "info"} size={19} /><div><strong>{title}</strong><p>{children}</p></div></div>;
}
