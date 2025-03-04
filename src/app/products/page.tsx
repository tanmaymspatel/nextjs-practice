import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <div>
      <h1>Product list</h1>
      <h2>
        <Link href={"products/1"}> Product 1 </Link>
      </h2>
      <h2>
        <Link href={"products/2"}>Product 2</Link>
      </h2>
      <h2>
        {/* replace skips previous screen when go to back, it directly goes to routed -1 page */}
        <Link href={"products/3"} replace>
          Product 3
        </Link>
      </h2>
    </div>
  );
}
