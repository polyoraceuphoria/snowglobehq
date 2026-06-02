import { useState } from "react";
import { EndpointCard } from "./components/cards/EndpointCard";
import { PlaybookCard } from "./components/cards/PlaybookCard";
import { ResourceGrid } from "./components/cards/ResourceGrid";
import { SystemCard } from "./components/cards/SystemCard";
import { EndpointHeader } from "./components/docs/EndpointHeader";
import { JsonBlock } from "./components/docs/JsonBlock";
import { MethodBadge, StatusBadge, VersionBadge } from "./components/docs/Badges";
import { hasSnowAngelAccess, SnowAngelGate } from "./components/layout/SnowAngelGate";
import { SnowGlobeShell } from "./components/layout/SnowGlobeShell";
import { ChangelogEntry } from "./components/status/ChangelogEntry";
import type { EndpointPage, Playbook, Resource } from "./content/types";
import { content, findDoc, findPlaybook, findResource, homeEndpointCards, normalizePath } from "./lib/content";
import { appHref } from "./lib/routes";

function routePath() {
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname;
  let path = window.location.pathname;
  if (basePath !== "/" && path.startsWith(basePath)) {
    path = `/${path.slice(basePath.length)}`;
  }
  return normalizePath(path);
}

function Dashboard() {
  const cards = homeEndpointCards
    .map((route) => findDoc(route))
    .filter((page): page is EndpointPage => Boolean(page));

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Private HQ for Snow Angels</p>
          <h1>SnowGlobe</h1>
          <p>
            Internal docs, care standards, operating playbooks, and protected protocols - organized like an API, built for people.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={appHref("/docs/getting-started")}>GET /getting-started</a>
            <a className="secondary-action" href={appHref("/status")}>View system status</a>
          </div>
        </div>
        <JsonBlock
          label="portal"
          value={{
            portal: "SnowGlobe",
            organization: "Snow Digital Group",
            audience: "Snow Angels",
            access: "protected",
            directive: "#forsnow",
            status: "active"
          }}
        />
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Endpoint map</p>
          <h2>Core operating routes</h2>
        </div>
        <div className="endpoint-grid">
          {cards.map((page) => (
            <EndpointCard key={page.route} page={page} />
          ))}
        </div>
      </section>

      <SystemCard />
    </div>
  );
}

function DocsLanding() {
  return (
    <div className="page-stack">
      <section className="section-heading large">
        <p className="eyebrow">Docs</p>
        <h1>Internal documentation, shaped like an API.</h1>
        <p>Start with the overview, then move into operations, care boundaries, emergency escalation, and handoff discipline.</p>
      </section>
      <div className="endpoint-grid">
        {content.docs.map((page) => (
          <EndpointCard key={page.route} page={page} />
        ))}
      </div>
    </div>
  );
}

function DocPage({ page }: { page: EndpointPage }) {
  return (
    <article className="doc-page page-stack">
      <EndpointHeader page={page} />
      {page.caution ? (
        <aside className="caution-card">
          <strong>Operational caution</strong>
          <p>{page.caution}</p>
        </aside>
      ) : null}
      <div className="doc-layout">
        <div className="doc-body">
          {page.sections.map((section) => (
            <section key={section.heading} className="doc-section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <aside className="doc-aside">
          <JsonBlock label="response" value={page.response} />
          <div className="meta-card">
            <span>Updated</span>
            <strong>{page.updated}</strong>
          </div>
        </aside>
      </div>
    </article>
  );
}

function PlaybooksLanding() {
  return (
    <div className="page-stack">
      <section className="section-heading large">
        <p className="eyebrow">Playbooks</p>
        <h1>Operating rhythm, not folklore.</h1>
        <p>Reusable patterns for client delivery, house standards, Snow care boundaries, and communication.</p>
      </section>
      <div className="endpoint-grid">
        {content.playbooks.map((playbook) => (
          <PlaybookCard playbook={playbook} key={playbook.route} />
        ))}
      </div>
    </div>
  );
}

function PlaybookPage({ playbook }: { playbook: Playbook }) {
  return (
    <article className="page-stack">
      <header className="endpoint-header">
        <div className="endpoint-meta">
          <MethodBadge method="GET" />
          <code>{playbook.route.replace("/playbooks", "")}</code>
          <VersionBadge version={playbook.version} />
          <StatusBadge status={playbook.status} />
        </div>
        <h1>{playbook.title}</h1>
        <p>{playbook.description}</p>
      </header>
      <section className="steps-card">
        {playbook.steps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </section>
    </article>
  );
}

function ResourcesPage({ resource }: { resource?: Resource }) {
  if (resource) {
    return (
      <article className="page-stack">
        <header className="endpoint-header">
          <div className="endpoint-meta">
            <MethodBadge method="GET" />
            <code>{resource.route.replace("/resources", "")}</code>
            <StatusBadge status={resource.status} />
          </div>
          <h1>{resource.title}</h1>
          <p>{resource.description}</p>
        </header>
        <JsonBlock label="resource" value={resource} />
      </article>
    );
  }

  return (
    <div className="page-stack">
      <section className="section-heading large">
        <p className="eyebrow">Resources</p>
        <h1>Assets, scripts, checklists, and templates.</h1>
        <p>V1 keeps resources indexed without storing private files in the frontend repository.</p>
      </section>
      <ResourceGrid resources={content.resources} />
    </div>
  );
}

function StatusPage() {
  return (
    <div className="page-stack">
      <section className="hero-panel compact">
        <div>
          <p className="eyebrow">System status</p>
          <h1>SnowGlobe status</h1>
          <p>Static portal is healthy. Access control must be enforced by Cloudflare Access before team rollout.</p>
        </div>
        <JsonBlock
          label="status"
          value={{
            app: "SnowGlobe",
            app_status: "active",
            deployment: "static_pages_ready",
            local_gate: "active_staging_only",
            auth_boundary: "cloudflare_access_required",
            secrets_in_frontend: false
          }}
        />
      </section>
      <div className="status-grid">
        {[
          ["Static app", "active"],
          ["Snow Angel code gate", "staging"],
          ["Content validation", "active"],
          ["Cloudflare Access", "required"],
          ["Database", "not_in_v1"]
        ].map(([label, value]) => (
          <article className="status-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

function ChangelogPage() {
  return (
    <div className="page-stack">
      <section className="section-heading large">
        <p className="eyebrow">Changelog</p>
        <h1>Versioned operating memory.</h1>
        <p>Every meaningful change should leave a clean trail for Snow Angels.</p>
      </section>
      <div className="changelog-list">
        {content.changelog.map((item) => (
          <ChangelogEntry item={item} key={item.version} />
        ))}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <section className="hero-panel compact">
      <div>
        <p className="eyebrow">404</p>
        <h1>Endpoint not found.</h1>
        <p>This SnowGlobe route is not initialized yet.</p>
        <a className="primary-action" href={appHref("/")}>Return to dashboard</a>
      </div>
    </section>
  );
}

function renderRoute(path: string) {
  if (path === "/") return <Dashboard />;
  if (path === "/docs") return <DocsLanding />;
  if (path === "/playbooks") return <PlaybooksLanding />;
  if (path === "/resources") return <ResourcesPage />;
  if (path === "/status") return <StatusPage />;
  if (path === "/changelog") return <ChangelogPage />;

  const doc = findDoc(path);
  if (doc) return <DocPage page={doc} />;

  const playbook = findPlaybook(path);
  if (playbook) return <PlaybookPage playbook={playbook} />;

  const resource = findResource(path);
  if (resource) return <ResourcesPage resource={resource} />;

  return <NotFound />;
}

export default function App() {
  const [accessGranted, setAccessGranted] = useState(hasSnowAngelAccess);
  const path = routePath();
  if (!accessGranted) return <SnowAngelGate onUnlock={() => setAccessGranted(true)} />;
  return <SnowGlobeShell activePath={path}>{renderRoute(path)}</SnowGlobeShell>;
}
