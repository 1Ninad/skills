import React from "react";

export function Tabs({ tabs, active, onChange }) {
  return <div className="tabs"><div className="tab-list" role="tablist">{tabs.map((tab) => <button type="button" key={tab} className={`tab ${active === tab ? "active" : ""}`} role="tab" aria-selected={active === tab} onClick={() => onChange(tab)}>{tab}</button>)}</div></div>;
}
