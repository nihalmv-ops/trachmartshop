/**
 * SpecStrip — the site's signature element.
 * Renders a product's key specs as a horizontal row of monospace
 * "datasheet" chips, so shoppers can compare devices at a glance
 * the way an engineer reads a spec sheet, not a marketing blurb.
 */
export default function SpecStrip({ specs, compact = false }) {
  const entries = Object.entries(specs);
  return (
    <div
      className={`flex flex-wrap gap-1.5 ${compact ? "gap-1" : "gap-1.5"}`}
      aria-label="Key specifications"
    >
      {entries.map(([key, value]) => (
        <span key={key} className="spec-chip" title={key}>
          <span className="text-ink-faint uppercase mr-1">{shortLabel(key)}</span>
          {value}
        </span>
      ))}
    </div>
  );
}

function shortLabel(key) {
  const map = {
    processor: "CPU",
    ram: "RAM",
    storage: "STG",
    display: "DISP",
    battery: "BATT",
  };
  return map[key] || key.slice(0, 4).toUpperCase();
}
