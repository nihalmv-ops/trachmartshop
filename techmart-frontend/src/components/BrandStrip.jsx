import brands from "../data/brands.json";

export default function BrandStrip() {
  return (
    <section className="border-y border-border bg-surface/40 py-8 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_28s_linear_infinite] w-max">
        {[...brands, ...brands].map((brand, idx) => (
          <span
            key={idx}
            className="font-display font-semibold text-lg text-ink-faint tracking-wide shrink-0"
          >
            {brand}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
