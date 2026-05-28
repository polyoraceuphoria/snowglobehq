import type { EndpointPage } from "../../content/types";
import { MethodBadge, StatusBadge } from "../docs/Badges";

export function EndpointCard({ page }: { page: EndpointPage }) {
  return (
    <a className="endpoint-card" href={page.route}>
      <div className="endpoint-card-top">
        <MethodBadge method={page.method} />
        <StatusBadge status={page.status} />
      </div>
      <code>{page.route.replace("/docs", "") || "/docs"}</code>
      <h3>{page.title}</h3>
      <p>{page.description}</p>
    </a>
  );
}
