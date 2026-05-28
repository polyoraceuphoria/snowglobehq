import type React from "react";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "green" | "blue" | "lavender" | "amber" | "red" | "neutral";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function MethodBadge({ method }: { method: string }) {
  return <Badge tone={method === "GET" ? "green" : "blue"}>{method}</Badge>;
}

export function StatusBadge({ status }: { status: string }) {
  const tone = status === "active" ? "green" : status === "protected" ? "lavender" : status === "draft" ? "amber" : "blue";
  return <Badge tone={tone}>{status}</Badge>;
}

export function VersionBadge({ version }: { version: string }) {
  return <Badge tone="neutral">{version}</Badge>;
}
