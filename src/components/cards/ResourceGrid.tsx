import type { Resource } from "../../content/types";
import { StatusBadge } from "../docs/Badges";

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <a href={resource.route} className="resource-card" key={resource.route}>
          <div className="endpoint-card-top">
            <span className="resource-kind">{resource.kind}</span>
            <StatusBadge status={resource.status} />
          </div>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </a>
      ))}
    </div>
  );
}
