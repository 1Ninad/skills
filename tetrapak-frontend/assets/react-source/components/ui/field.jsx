import React, { cloneElement, useId } from "react";

export function Field({ label, hint, children }) {
  const generatedId = useId();
  const control = cloneElement(React.Children.only(children), { id: children.props.id || generatedId });
  return <div className="field"><label className="field-label" htmlFor={children.props.id || generatedId}>{label}</label>{control}{hint && <span className="field-hint">{hint}</span>}</div>;
}
