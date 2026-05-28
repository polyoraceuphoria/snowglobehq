import { navigationGroups } from "../../lib/navigation";
import { MethodBadge, StatusBadge } from "../docs/Badges";

export function DocsSidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="docs-sidebar" aria-label="SnowGlobe navigation">
      <a className="sidebar-brand" href="/">
        <span>SnowGlobe</span>
        <small>Internal HQ</small>
      </a>
      <nav>
        {navigationGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.items.map((item) => (
              <a className={item.route === activePath ? "active" : ""} href={item.route} key={item.route}>
                {item.method ? <MethodBadge method={item.method} /> : null}
                <span>{item.label}</span>
                {item.status ? <StatusBadge status={item.status} /> : null}
              </a>
            ))}
          </section>
        ))}
      </nav>
    </aside>
  );
}
