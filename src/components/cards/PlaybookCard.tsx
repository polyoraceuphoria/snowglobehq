import type { Playbook } from "../../content/types";
import { StatusBadge, VersionBadge } from "../docs/Badges";

export function PlaybookCard({ playbook }: { playbook: Playbook }) {
  return (
    <a className="playbook-card" href={playbook.route}>
      <div className="endpoint-card-top">
        <VersionBadge version={playbook.version} />
        <StatusBadge status={playbook.status} />
      </div>
      <h3>{playbook.title}</h3>
      <p>{playbook.description}</p>
      <span className="owner-label">{playbook.owner}</span>
    </a>
  );
}
