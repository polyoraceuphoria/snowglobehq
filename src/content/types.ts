export type PageStatus = "active" | "draft" | "protected" | "monitoring";
export type HttpMethod = "GET" | "POST" | "PATCH";

export type ContentSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type EndpointPage = {
  route: string;
  method: HttpMethod;
  title: string;
  description: string;
  group: string;
  version: string;
  status: PageStatus;
  updated: string;
  sections: ContentSection[];
  response: Record<string, string | number | boolean | string[]>;
  caution?: string;
};

export type Playbook = {
  route: string;
  title: string;
  description: string;
  owner: string;
  version: string;
  status: PageStatus;
  updated: string;
  steps: string[];
};

export type Resource = {
  route: string;
  title: string;
  description: string;
  kind: string;
  status: PageStatus;
};

export type ChangelogItem = {
  version: string;
  date: string;
  title: string;
  notes: string[];
};

export type SiteContent = {
  docs: EndpointPage[];
  playbooks: Playbook[];
  resources: Resource[];
  changelog: ChangelogItem[];
};
