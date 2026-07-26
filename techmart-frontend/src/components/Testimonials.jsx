import testimonials from "../data/testimonials.json";
import RatingStars from "./RatingStars";
import { SectionHeading } from "./CategoryShowcase";

export default function Testimonials() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Reviews" title="What customers say" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-surface border border-border rounded-2xl p-5 flex flex-col gap-3"
          >
            <RatingStars rating={t.rating} size={13} />
            <p className="text-sm text-ink-muted leading-relaxed flex-1">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <img
                src={`https://picsum.photos/seed/${t.avatarSeed}/64/64`}
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
