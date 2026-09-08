import React from "react";
import { Button } from "./button.jsx";
import { Icon } from "./icons.jsx";

export function LoadingState() {
  return <div className="state-card loading-state"><span className="spinner" /><strong>Loading status</strong><p>Checking the latest asset data.</p></div>;
}

export function EmptyState({ title, copy, actionLabel, onAction }) {
  return <div className="state-card empty-state"><span className="state-icon"><Icon name="search" size={20} /></span><strong>{title}</strong><p>{copy}</p>{actionLabel && <Button variant="text" onClick={onAction} icon="arrow-right">{actionLabel}</Button>}</div>;
}

export function ErrorState({ onRetry }) {
  return <div className="state-card error-state"><span className="state-icon"><Icon name="alert" size={20} /></span><strong>Unable to load</strong><p>There was a problem reaching the service.</p><Button variant="text" onClick={onRetry} icon="refresh-cw">Try again</Button></div>;
}
