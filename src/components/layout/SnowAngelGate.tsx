import { useState } from "react";
import type { FormEvent } from "react";
import { JsonBlock } from "../docs/JsonBlock";

const ACCESS_CODE = "welovesnow999";
const ACCESS_STORAGE_KEY = "snowglobe:snow-angel-access";

export function hasSnowAngelAccess() {
  try {
    return window.localStorage.getItem(ACCESS_STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

function grantSnowAngelAccess() {
  try {
    window.localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
  } catch {
    // If storage is unavailable, allow the in-memory app state to unlock.
  }
}

export function SnowAngelGate({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (code.trim().toLowerCase() === ACCESS_CODE) {
      grantSnowAngelAccess();
      onUnlock();
      return;
    }
    setError("Access code not recognized. Check the Snow Angel handoff and try again.");
  }

  return (
    <main className="access-gate" aria-labelledby="access-title">
      <section className="access-card">
        <div className="access-copy">
          <div className="access-status">
            <span className="status-dot" aria-hidden="true" />
            <code>snowglobe.snowdigitalgroup.com</code>
          </div>
          <p className="eyebrow">Private HQ for Snow Angels</p>
          <h1 id="access-title">SnowGlobe</h1>
          <p>
            Internal docs, care standards, operating playbooks, and protected protocols - organized like an API, built for people.
          </p>
          <form className="access-form" onSubmit={submit}>
            <label htmlFor="snowAngelCode">Snow Angel access code</label>
            <div className="access-input-row">
              <input
                id="snowAngelCode"
                autoComplete="off"
                inputMode="text"
                placeholder="Enter access code"
                type="password"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setError("");
                }}
              />
              <button type="submit">Enter HQ</button>
            </div>
            {error ? <p className="access-error" role="alert">{error}</p> : null}
          </form>
          <p className="access-note">
            This is a soft staging gate. Production access should still be enforced by Cloudflare Access before real internal data is added.
          </p>
        </div>
        <JsonBlock
          label="access"
          value={{
            portal: "SnowGlobe",
            audience: "Snow Angels",
            local_gate: "active",
            production_gate: "cloudflare_access_required",
            data_policy: "public_safe_staging_only"
          }}
        />
      </section>
    </main>
  );
}
