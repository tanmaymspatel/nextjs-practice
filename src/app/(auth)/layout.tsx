"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Resister",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

/**
 * @returns state is managed/preserved in layout.tsx
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="flex gap-2">
        <label htmlFor="inp">Input:</label>
        <input
          id="inp"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-700 rounded-md"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`mr-2 text-blue-500 ${
              isActive ? "font-bold border-2 border-blue-600 " : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
