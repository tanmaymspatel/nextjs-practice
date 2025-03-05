"use client";
import React from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h3>{error.message}</h3>
      <button onClick={reset}>Reset </button>
    </div>
  );
}
