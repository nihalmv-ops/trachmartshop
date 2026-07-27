import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import categories from "../data/categories.json";

export default function CategoryShowcase() {
  return (
    <section className="container-shell py-20">

      <SectionHeading
        eyebrow="Browse Categories"
        title="Find Your Perfect Device"
      />

      <div className="grid sm:grid-cols-2 gap-8 mt-10">

        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop/${cat.slug}`}
            className="group relative overflow-hidden rounded-3xl
            border border-[#1F3A2D]
            bg-[#0B0B0B]
            shadow-[0_10px_40px_rgba(0,0,0,.55)]
            hover:shadow-[0_15px_60px_rgba(17,95,65,.45)]
            transition-all duration-500 h-72"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Dark Premium Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t
            from-[#050505]/95
            via-[#0D2218]/55
            to-transparent"></div>

            {/* Green Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(35,120,80,.25),transparent_55%)]"></div>

            {/* Content */}

            <div className="relative h-full flex items-end justify-between p-7">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {cat.name}
                </h3>

                <p className="mt-2 text-gray-300">
                  {cat.tagline}
                </p>
              </div>

              <div
                className="
                flex h-12 w-12 items-center justify-center
                rounded-full
                bg-[#143322]
                border border-[#2E6D52]
                text-[#63D69B]
                shadow-lg
                group-hover:bg-[#2E6D52]
                group-hover:text-white
                group-hover:rotate-45
                group-hover:scale-110
                transition-all duration-300"
              >
                <ArrowUpRight size={22} />
              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">

      <div>

        {eyebrow && (
          <span
            className="
            inline-block
            rounded-full
            bg-[#12261C]
            border border-[#29533F]
            px-4 py-2
            text-sm
            font-semibold
            tracking-wider
            uppercase
            text-[#63D69B]"
          >
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-4xl font-bold text-white">
          {title}
        </h2>

      </div>

      {action}

    </div>
  );
}