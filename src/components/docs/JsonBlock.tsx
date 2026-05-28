import { CopyButton } from "./CopyButton";

export function JsonBlock({ value, label = "response" }: { value: unknown; label?: string }) {
  const formatted = JSON.stringify(value, null, 2);

  return (
    <div className="json-block">
      <div className="json-toolbar">
        <span>{label}.json</span>
        <CopyButton value={formatted} />
      </div>
      <pre>
        <code>{formatted}</code>
      </pre>
    </div>
  );
}
