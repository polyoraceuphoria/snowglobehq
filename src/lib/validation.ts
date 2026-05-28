import type { SiteContent } from "../content/types";

const prohibitedPhrases = [
  "official medical advice",
  "medical diagnosis",
  "guaranteed",
  "stanford-approved",
  "apple-approved",
  "gerber-endorsed",
  "cloudflare-approved",
  "authorized by cloudflare",
  "real address",
  "real phone number",
  "pediatrician details"
];

export function validateContent(content: SiteContent) {
  const issues: string[] = [];

  for (const page of content.docs) {
    if (!page.title || !page.route || !page.description || !page.version || !page.status) {
      issues.push(`Doc page missing required fields: ${page.route || page.title || "unknown"}`);
    }

    if (!page.sections.length) {
      issues.push(`Doc page has no sections: ${page.route}`);
    }

    if (page.route.includes("emergency")) {
      const text = JSON.stringify(page).toLowerCase();
      for (const required of ["911", "parent", "poison control"]) {
        if (!text.includes(required)) {
          issues.push(`Emergency page missing ${required}: ${page.route}`);
        }
      }
    }
  }

  for (const playbook of content.playbooks) {
    if (!playbook.title || !playbook.route || !playbook.description || !playbook.version || !playbook.status) {
      issues.push(`Playbook missing required fields: ${playbook.route || playbook.title || "unknown"}`);
    }
    if (!playbook.steps.length) {
      issues.push(`Playbook has no steps: ${playbook.route}`);
    }
  }

  for (const item of content.changelog) {
    if (!item.date || !item.version || !item.title) {
      issues.push(`Changelog item missing date, version, or title: ${item.version || "unknown"}`);
    }
  }

  const haystack = JSON.stringify(content).toLowerCase();
  for (const phrase of prohibitedPhrases) {
    if (haystack.includes(phrase)) {
      issues.push(`Prohibited phrase detected: ${phrase}`);
    }
  }

  return issues;
}
