import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <div className="flex flex-col">
      <h3>Default Notifications</h3>
      <Link href={"/complex-dashboard/archived"} className="text-blue-500">
        Switch Archived
      </Link>
    </div>
  );
}
