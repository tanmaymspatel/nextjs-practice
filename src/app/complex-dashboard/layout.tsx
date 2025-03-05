import React, { ReactNode } from "react";

/**
 * @folderName is called a slot. it does not show while routing, it is noly for rendering purpose.
 * If we go to that route, then we will get 404 page.
 * Useful to split a single layout into various slots, making the code more managable, can be used when there are more developers working on the project
 * Independent Route Handling: Each slot can have its own loading and error states.
 * Sub-navidation: Can perform individual operations in the respective slots
 * Allows simultaneous rendering  of the diiferent slots within the same layout.
 * Can swich from default to archived notifications within only @notification slotW.
 * Add default.tsx to the slot, it will work as a fallback file while sub-rendering routes
 */

export default function DashboradLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <div>{children}</div>
      <div className="flex gap-2">
        <div className="flex flex-col w-[30%]">
          <div className="h-[200px] border border-blue-400">{users}</div>
          <div className="h-[200px] border border-violet-400">{revenue}</div>
        </div>
        <div className="grow h-[400px] border border-teal-400">
          {notifications}
        </div>
      </div>
    </div>
  );
}
