import { content } from "./content";

export type NavigationGroup = {
  title: string;
  items: {
    route: string;
    label: string;
    method?: string;
    status?: string;
  }[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    title: "Overview",
    items: [
      { route: "/", label: "Overview", method: "GET", status: "active" },
      ...content.docs
        .filter((page) => page.group === "Overview")
        .map((page) => ({ route: page.route, label: page.title, method: page.method, status: page.status }))
    ]
  },
  {
    title: "Operations",
    items: content.docs
      .filter((page) => page.group === "Operations")
      .map((page) => ({ route: page.route, label: page.title, method: page.method, status: page.status }))
  },
  {
    title: "Safety",
    items: content.docs
      .filter((page) => page.group === "Safety")
      .map((page) => ({ route: page.route, label: page.title, method: page.method, status: page.status }))
  },
  {
    title: "Resources",
    items: [
      { route: "/resources", label: "Resources", method: "GET", status: "active" },
      ...content.resources.map((page) => ({ route: page.route, label: page.title, method: "GET", status: page.status }))
    ]
  },
  {
    title: "System",
    items: [
      { route: "/status", label: "Status", method: "GET", status: "monitoring" },
      { route: "/changelog", label: "Changelog", method: "GET", status: "active" }
    ]
  }
];
