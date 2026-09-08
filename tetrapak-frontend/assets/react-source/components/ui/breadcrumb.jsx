import React from "react";
import { Icon } from "./icons.jsx";

export function Breadcrumb({ items }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <React.Fragment key={item}><a href={index === 0 ? "#top" : `#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>{index < items.length - 1 && <Icon name="chevron-right" size={13} />}</React.Fragment>)}</nav>;
}
