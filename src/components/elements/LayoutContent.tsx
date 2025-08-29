"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import SimpleHeader from "./SimpleHeader";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useSidebar();

  return (
    <div className="w-full h-screen flex">
      <div
        className={`h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        }`}
      >
        <AppSidebar />
      </div>
      <div className="flex-1 h-full flex flex-col">
        <SimpleHeader />
        {children}
      </div>
    </div>
  );
}
