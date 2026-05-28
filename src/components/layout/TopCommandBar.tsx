import { SearchOverlay } from "../search/SearchOverlay";

export function TopCommandBar() {
  return (
    <header className="top-command-bar">
      <div>
        <span className="status-dot" />
        <strong>snowglobe.snowdigitalgroup.com</strong>
      </div>
      <SearchOverlay />
    </header>
  );
}
