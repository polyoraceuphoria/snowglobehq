import { JsonBlock } from "../docs/JsonBlock";

export function SystemCard() {
  return (
    <section className="system-card">
      <div>
        <p className="eyebrow">System response</p>
        <h2>Protected HQ is active.</h2>
        <p>
          SnowGlobe starts as a static internal portal. Cloudflare Access owns the gate; SnowGlobe owns the operating rhythm.
        </p>
      </div>
      <JsonBlock
        label="snowglobe"
        value={{
          portal: "SnowGlobe",
          organization: "Snow Digital Group",
          audience: "Snow Angels",
          access: "protected",
          directive: "#forsnow",
          status: "active"
        }}
      />
    </section>
  );
}
