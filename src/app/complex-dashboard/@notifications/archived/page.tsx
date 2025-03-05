import Link from "next/link";
import React from "react";

export default function ArchivedNotifications() {
  return (
    <div className="flex flex-col">
      <h3>Archived Notification</h3>
      <Link className="text-blue-500" href={"/complex-dashboard"}>
        Switch Default
      </Link>
    </div>
  );
}
