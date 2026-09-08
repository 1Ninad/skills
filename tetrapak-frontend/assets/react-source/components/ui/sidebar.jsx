import React from "react";
import { Icon } from "./icons.jsx";

export function Sidebar({ groups, activeItem, onSelect }) {
  return <aside className="sidebar"><div className="sidebar-head"><span className="overline">On this page</span><button type="button" className="sidebar-collapse" aria-label="Collapse sidebar"><Icon name="arrow-left" size={16} /></button></div>{groups.map((group) => <div className="sidebar-group" key={group.label}><span className="sidebar-label">{group.label}</span>{group.items.map((item) => <button type="button" key={item} className={`sidebar-item ${activeItem === item ? "active" : ""}`} onClick={() => onSelect(item)}>{item}{activeItem === item && <Icon name="arrow-right" size={15} />}</button>)}</div>)}</aside>;
}
