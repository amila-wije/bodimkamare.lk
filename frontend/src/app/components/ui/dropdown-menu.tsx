"use client";

import * as React from "react";

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">{children}</div>
);

export const DropdownMenuTrigger = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => (
  <div>{children}</div>
);

export const DropdownMenuContent = ({ children, align }: { children: React.ReactNode; align?: string }) => (
  <div className={`absolute mt-2 bg-white text-black rounded-lg shadow-lg ${align === "end" ? "right-0" : "left-0"}`}>
    {children}
  </div>
);

export const DropdownMenuItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={onClick}>
    {children}
  </button>
);
