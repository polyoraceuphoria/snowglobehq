import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentPath = path.join(root, "src/content/site.json");
const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));

const issues = [];
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

for (const page of content.docs ?? []) {
  if (!page.title || !page.route || !page.description || !page.version || !page.status) {
    issues.push(`Doc page missing required fields: ${page.route || page.title || "unknown"}`);
  }

  if (!Array.isArray(page.sections) || page.sections.length === 0) {
    issues.push(`Doc page has no sections: ${page.route}`);
  }

  if (page.route?.includes("emergency")) {
    const text = JSON.stringify(page).toLowerCase();
    for (const required of ["911", "parent", "poison control"]) {
      if (!text.includes(required)) {
        issues.push(`Emergency page missing ${required}: ${page.route}`);
      }
    }
  }
}

for (const playbook of content.playbooks ?? []) {
  if (!playbook.title || !playbook.route || !playbook.description || !playbook.version || !playbook.status) {
    issues.push(`Playbook missing required fields: ${playbook.route || playbook.title || "unknown"}`);
  }

  if (!Array.isArray(playbook.steps) || playbook.steps.length === 0) {
    issues.push(`Playbook has no steps: ${playbook.route}`);
  }
}

for (const resource of content.resources ?? []) {
  if (!resource.title || !resource.route || !resource.description || !resource.kind || !resource.status) {
    issues.push(`Resource missing required fields: ${resource.route || resource.title || "unknown"}`);
  }
}

for (const item of content.changelog ?? []) {
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

if (issues.length > 0) {
  console.error("SnowGlobe content validation failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("SnowGlobe content validation passed.");
