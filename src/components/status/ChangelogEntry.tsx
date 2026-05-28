import type { ChangelogItem } from "../../content/types";

export function ChangelogEntry({ item }: { item: ChangelogItem }) {
  return (
    <article className="changelog-entry">
      <div>
        <span>{item.version}</span>
        <time dateTime={item.date}>{item.date}</time>
      </div>
      <h3>{item.title}</h3>
      <ul>
        {item.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </article>
  );
}
