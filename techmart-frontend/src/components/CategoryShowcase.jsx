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
            className="group relative overflow-hidden rounded-3xl border  shadow-lg hover:shadow-2xl transition-all duration-500 h-72"
          >

            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A1F]/75 via-[#1F2A1F]/20 to-transparent"></div>

            {/* Content */}

            <div className="relative h-full flex items-end justify-between p-7">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  {cat.name}
                </h3>

                <p className="mt-2 text-[#E8F0E6]">
                  {cat.tagline}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5E7D5A] shadow-lg group-hover:bg-[#5E7D5A] group-hover:text-white group-hover:rotate-45 transition-all duration-300">

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
          <span className="inline-block rounded-full bg-[#EDF5EC] px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#5E7D5A]">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-4xl font-bold text-[#243224]">
          {title}
        </h2>

      </div>

      {action}

    </div>
  );
}