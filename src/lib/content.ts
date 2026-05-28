import siteContent from "../content/site.json";
import type { EndpointPage, Playbook, Resource, SiteContent } from "../content/types";

export const content = siteContent as unknown as SiteContent;

export const homeEndpointCards = [
  "/docs/mission",
  "/docs/snow-angels",
  "/docs/standards",
  "/docs/care-ops",
  "/docs/client-ops",
  "/docs/emergency",
  "/docs/handoff",
  "/docs/changelog"
];

export function normalizePath(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

export function findDoc(route: string): EndpointPage | undefined {
  return content.docs.find((page) => page.route === route);
}

export function findPlaybook(route: string): Playbook | undefined {
  return content.playbooks.find((page) => page.route === route);
}

export function findResource(route: string): Resource | undefined {
  return content.resources.find((page) => page.route === route);
}

export function allSearchItems() {
  return [
    ...content.docs.map((item) => ({
      route: item.route,
      title: item.title,
      description: item.description,
      label: `${item.method} ${item.route.replace("/docs", "") || "/docs"}`,
      group: item.group
    })),
    ...content.playbooks.map((item) => ({
      route: item.route,
      title: item.title,
      description: item.description,
      label: "PLAYBOOK",
      group: "Playbooks"
    })),
    ...content.resources.map((item) => ({
      route: item.route,
      title: item.title,
      description: item.description,
      label: "RESOURCE",
      group: "Resources"
    }))
  ];
}
