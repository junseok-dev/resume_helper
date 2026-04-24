import React from "react";

export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-5 py-2.5 bg-[#EFF6FF] text-[#2563EB] rounded-full text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
      {children}
    </span>
  );
}
