import { allSearchItems } from "./content";

export function searchSnowGlobe(query: string) {
  const clean = query.trim().toLowerCase();
  const items = allSearchItems();

  if (!clean) {
    return items.slice(0, 8);
  }

  return items.filter((item) => {
    return [item.title, item.description, item.label, item.group, item.route]
      .join(" ")
      .toLowerCase()
      .includes(clean);
  });
}
