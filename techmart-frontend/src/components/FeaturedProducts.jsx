import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { SectionHeading } from "./CategoryShowcase";

export default function FeaturedProducts({
  tag = "bestseller",
  title = "Best Sellers",
  eyebrow = "Featured Products",
}) {

  const [activeVideo, setActiveVideo] = useState(null);

  const featured = products
    .filter((p) => p.tags?.includes(tag))
    .slice(0, 4);

  return (
    <section className="container-shell py-20">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        action={
          <Link
            to="/shop/laptop"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#D6DFD4] bg-white px-5 py-2.5 font-medium text-[#5E7D5A] shadow-sm transition-all duration-300 hover:bg-[#5E7D5A] hover:text-white"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        }
      />

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((product) => (
          <div
            key={product.id}
            className="transition-transform duration-300 hover:-translate-y-2"
          >
            <ProductCard
              product={product}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}