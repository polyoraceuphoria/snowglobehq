import type { EndpointPage } from "../../content/types";
import { MethodBadge, StatusBadge, VersionBadge } from "./Badges";

export function EndpointHeader({ page }: { page: EndpointPage }) {
  return (
    <header className="endpoint-header">
      <div className="endpoint-meta">
        <MethodBadge method={page.method} />
        <code>{page.route.replace("/docs", "") || "/docs"}</code>
        <VersionBadge version={page.version} />
        <StatusBadge status={page.status} />
      </div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </header>
  );
}
