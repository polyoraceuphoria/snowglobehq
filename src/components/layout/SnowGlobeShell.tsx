import type React from "react";
import { DocsSidebar } from "./DocsSidebar";
import { ProtectedNotice } from "./ProtectedNotice";
import { TopCommandBar } from "./TopCommandBar";

export function SnowGlobeShell({ activePath, children }: { activePath: string; children: React.ReactNode }) {
  return (
    <div className="snowglobe-app">
      <DocsSidebar activePath={activePath} />
      <div className="main-column">
        <TopCommandBar />
        <main>{children}</main>
        <ProtectedNotice />
      </div>
    </div>
  );
}
