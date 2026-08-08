import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import {
  ShoppingCart,
  Heart,
} from "lucide-react";

import RatingStars from "./RatingStars";
import SpecStrip from "./SpecStrip";
import { formatINR, discountPercent } from "../utils/format";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({
  product,
  activeVideo: externalActiveVideo,
  setActiveVideo: externalSetActiveVideo,
}) {
  const { addItem } = useCart();

  const {
    items: wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const discount = discountPercent(
    product.price,
    product.oldPrice
  );

  const [internalActiveVideo, internalSetActiveVideo] =
    useState(null);

  const activeVideo =
    externalActiveVideo ?? internalActiveVideo;

  const setActiveVideo =
    externalSetActiveVideo ?? internalSetActiveVideo;

  const videoRef = useRef(null);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (activeVideo === product.id) {
      video.currentTime = 0;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [activeVideo, product.id]);

  const playVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (activeVideo === product.id) return;

    document.querySelectorAll("video").forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });

    setActiveVideo(product.id);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-300 shadow-card flex flex-col">

      {/* Product Image / Video */}

      <Link
        to={`/product/${product.id}`}
        className="block"
      >
        <div
          className="relative aspect-square overflow-hidden bg-surface-light"
          onClick={playVideo}
        >

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              activeVideo === product.id
                ? "opacity-0 scale-105"
                : "opacity-100 group-hover:scale-105"
            }`}
          />

          <video
            ref={videoRef}
            src={product.video}
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              activeVideo === product.id
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Discount / New */}

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

          {/* Wishlist */}

         <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  }}
  aria-label={
    isWishlisted
      ? `Remove ${product.name} from wishlist`
      : `Add ${product.name} to wishlist`
  }
  className={`absolute top-3 right-3 z-30 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
    isWishlisted
      ? "bg-red-500 border-red-500 text-white"
      : "bg-black/60 border-white/20 text-white hover:bg-red-500 hover:border-red-500"
  }`}
>
  <Heart
    size={19}
    fill={isWishlisted ? "currentColor" : "none"}
  />
</button>

        </div>
      </Link>

      {/* Product Details */}

      <div className="p-4 flex flex-col gap-2 flex-1">

        <p className="text-xs text-ink-faint uppercase tracking-wide font-mono">
          {product.brand}
        </p>

        <Link to={`/product/${product.id}`}>

          <h3 className="font-display font-semibold text-ink leading-snug hover:text-accent transition-colors">
            {product.name}
          </h3>

        </Link>

        <RatingStars
          rating={product.rating}
          reviews={product.reviews}
        />

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

          {/* Cart Button */}

          <button
            type="button"
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