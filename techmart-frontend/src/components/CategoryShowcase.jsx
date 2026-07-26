import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import categories from "../data/categories.json";

export default function CategoryShowcase() {
  return (
    <section className="container-shell py-16">
      <SectionHeading eyebrow="Browse" title="Shop by category" />
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-border h-64 flex items-end"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent" />
            <div className="relative p-6 flex items-end justify-between w-full">
              <div>
                <h3 className="font-display font-bold text-2xl text-ink">{cat.name}</h3>
                <p className="text-sm text-ink-muted mt-1">{cat.tagline}</p>
              </div>
              <span className="bg-accent text-base rounded-full p-2.5 group-hover:rotate-45 transition-transform duration-300 shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        {eyebrow && (
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink">{title}</h2>
      </div>
      {action}
    </div>
  );
}
