import { useEffect, useMemo, useState } from "react";
import { searchSnowGlobe } from "../../lib/search";

export function SearchOverlay() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSnowGlobe(query), [query]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("snowglobe-search")?.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="search-panel" aria-label="SnowGlobe search">
      <label htmlFor="snowglobe-search">Command search</label>
      <input
        id="snowglobe-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search docs, playbooks, resources..."
      />
      <div className="search-results">
        {results.map((item) => (
          <a href={item.route} key={item.route}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
            <em>{item.group}</em>
          </a>
        ))}
      </div>
    </div>
  );
}
