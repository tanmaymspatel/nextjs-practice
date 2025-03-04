"use client";

import { useState } from "react";

/**
 * can not define metadata in the client component
 */

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <div>{count}</div>
      <button
        className="bg-blue-600 text-white px-2 py-1 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
}
