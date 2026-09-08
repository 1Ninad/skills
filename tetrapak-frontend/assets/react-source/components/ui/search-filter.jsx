import React from "react";
import { Button } from "./button.jsx";
import { DropdownMenu } from "./dropdown-menu.jsx";
import { Icon } from "./icons.jsx";
import { Input } from "./input.jsx";
import { SelectField } from "./select-field.jsx";

export function SearchFilter({ query, onQueryChange, status, onStatusChange, menuOpen, onMenuToggle, onMenuClose, onAreaFilter, onReset }) {
  return <div className="table-toolbar"><div className="table-search"><Icon name="search" size={18} /><Input id="component-search" aria-label="Search assets" value={query} onChange={(e) => onQueryChange(e.target.value)} placeholder="Search assets" /></div><SelectField aria-label="Filter by status" value={status} onChange={onStatusChange} options={["All statuses", "Operational", "In review", "Needs attention"]} /><DropdownMenu label="More filters" open={menuOpen} onToggle={onMenuToggle} onClose={onMenuClose}><div className="menu-items"><button type="button" onClick={() => onAreaFilter("Packaging")}>Packaging assets</button><button type="button" onClick={() => onAreaFilter("Processing")}>Processing assets</button><button type="button" onClick={() => onAreaFilter("All areas")}>All areas</button></div></DropdownMenu><Button variant="text" onClick={onReset}>Clear all</Button></div>;
}
