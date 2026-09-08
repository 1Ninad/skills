import React from "react";
import { Badge } from "./badge.jsx";
import { Icon } from "./icons.jsx";
import { EmptyState } from "./states.jsx";

export function DataTable({ rows, onRowClick }) {
  return <div className="table-wrap"><table><thead><tr><th>Asset</th><th>Area</th><th>Status</th><th>Updated</th><th aria-label="Action" /></tr></thead><tbody>{rows.length ? rows.map((row) => <tr key={row.asset} onClick={() => onRowClick(row)}><td><strong>{row.asset}</strong><span>Equipment record</span></td><td>{row.area}</td><td><Badge tone={row.signal}>{row.status}</Badge></td><td>{row.updated}</td><td><button type="button" className="row-action" aria-label={`Open ${row.asset}`}><Icon name="arrow-right" size={17} /></button></td></tr>) : <tr><td colSpan="5"><div className="table-empty"><EmptyState title="No matching assets" copy="Try clearing a filter or searching for another machine." /></div></td></tr>}</tbody></table></div>;
}
