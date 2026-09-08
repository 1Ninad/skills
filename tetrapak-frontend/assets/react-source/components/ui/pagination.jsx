import React from "react";
import { Icon } from "./icons.jsx";

export function Pagination({ page, totalPages, onChange }) {
  return <nav className="pagination" aria-label="Pagination"><button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)}><Icon name="chevron-right" size={15} className="rotate-180" /></button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button type="button" key={number} className={page === number ? "active" : ""} aria-current={page === number ? "page" : undefined} onClick={() => onChange(number)}>{number}</button>)}<button type="button" aria-label="Next page" disabled={page === totalPages} onClick={() => onChange(page + 1)}><Icon name="chevron-right" size={15} /></button></nav>;
}
