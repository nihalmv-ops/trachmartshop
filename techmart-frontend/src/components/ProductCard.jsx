import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import RatingStars from "./RatingStars";
import SpecStrip from "./SpecStrip";
import { formatINR, discountPercent } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const discount = discountPercent(product.price, product.oldPrice);

  return (
    <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-300 shadow-card flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-surface-light">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {discount > 0 && (
              <span className="bg-sale text-base text-[11px] font-bold font-mono px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
            {product.tags?.includes("new") && (
              <span className="bg-accent text-base text-[11px] font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-ink-faint uppercase tracking-wide font-mono">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-semibold text-ink leading-snug hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <RatingStars rating={product.rating} reviews={product.reviews} />

        <SpecStrip
          specs={{
            ram: product.specs.ram,
            storage: product.specs.storage,
            battery: product.specs.battery,
          }}
          compact
        />

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-lg text-ink">
                {formatINR(product.price)}
              </span>
            </div>
            {product.oldPrice && (
              <span className="text-xs text-ink-faint line-through font-mono">
                {formatINR(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() => addItem(product, 1)}
            aria-label={`Add ${product.name} to cart`}
            className="shrink-0 bg-accent/10 hover:bg-accent text-accent hover:text-base border border-accent/30 hover:border-accent rounded-lg p-2.5 transition-colors duration-200"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
