import React from "react";

export function Brand({ name = "Tetra Pak", subtitle = "", logoSrc, logoAlt = name, logoShape = "horizontal", showText = false }) {
  return <div className="brand" aria-label={[name, subtitle].filter(Boolean).join(" ")}>{logoSrc && <img className={`brand-logo brand-logo-${logoShape}`} src={logoSrc} alt={logoAlt} />}{(!logoSrc || showText) && <span className="brand-copy"><strong>{name}</strong>{subtitle && <small>{subtitle}</small>}</span>}</div>;
}
