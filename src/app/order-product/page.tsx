"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order~!");
    router.push("/");
    // replace(), back(), forward()
  };
  return (
    <div className="flex gap-2 items-center container mx-auto">
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="text-white bg-blue-600 px-4 py-2 rounded-md"
      >
        Place order
      </button>
    </div>
  );
}
