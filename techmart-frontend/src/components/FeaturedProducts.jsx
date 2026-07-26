import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { SectionHeading } from "./CategoryShowcase";

export default function FeaturedProducts({ tag = "bestseller", title = "Bestsellers this week", eyebrow = "Popular" }) {
  const featured = products.filter((p) => p.tags?.includes(tag)).slice(0, 4);

  return (
    <section className="container-shell py-16">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        action={
          <Link
            to="/shop/laptop"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-cyan transition-colors"
          >
            View all <ArrowRight size={16} />
          </Link>
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
