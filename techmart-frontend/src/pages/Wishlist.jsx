import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/format";

export default function Wishlist() {
  const {
    items,
    toggleWishlist,
  } = useWishlist();

  const { addItem } = useCart();

  return (
    <div className="container-shell py-12 md:py-16">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

        <div>

          <p className="text-[#63D69B] uppercase tracking-[4px] text-sm font-semibold">
            Your Collection
          </p>

          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-white">
            My Wishlist
          </h1>

          <p className="mt-3 text-gray-400">
            Save your favourite products and find them anytime.
          </p>

        </div>

        {items.length > 0 && (
          <div className="px-5 py-3 rounded-xl bg-[#101010] border border-[#1F3A2D]">

            <span className="text-gray-400">
              {items.length}
            </span>

            <span className="ml-1 text-gray-500">
              {items.length === 1
                ? "Saved Product"
                : "Saved Products"}
            </span>

          </div>
        )}

      </div>

      {/* Empty Wishlist */}

      {items.length === 0 && (
        <div className="max-w-2xl mx-auto py-16 text-center">

          <div className="relative mx-auto w-28 h-28">

            <div className="absolute inset-0 rounded-full bg-[#1F5D43] blur-3xl opacity-20" />

            <div className="relative w-28 h-28 rounded-full bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">

              <Heart
                size={48}
                className="text-[#63D69B]"
              />

            </div>

          </div>

          <h2 className="mt-8 font-display text-3xl font-bold text-white">
            Your Wishlist is Empty
          </h2>

          <p className="mt-3 text-gray-400 max-w-md mx-auto">
            You haven't saved any products yet. Explore our collection and
            add your favourite laptops and mobiles to your wishlist.
          </p>

          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 mt-8"
          >
            Explore Products
            <ArrowRight size={18} />
          </Link>

        </div>
      )}

      {/* Wishlist Products */}

      {items.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {items.map((product) => (

            <div
              key={product.id}
              className="group rounded-3xl overflow-hidden bg-[#0B0B0B] border border-[#1F3A2D] hover:border-[#2C5E47] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,.25)]"
            >

              {/* Product Image */}

              <Link to={`/product/${product.id}`}>

                <div className="relative aspect-square overflow-hidden bg-[#101010]">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Wishlist indicator */}

                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#2C5E47] flex items-center justify-center">

                    <Heart
                      size={18}
                      fill="currentColor"
                      className="text-red-500"
                    />

                  </div>

                </div>

              </Link>

              {/* Product Details */}

              <div className="p-5">

                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {product.brand}
                </p>

                <Link to={`/product/${product.id}`}>

                  <h3 className="mt-2 font-display font-semibold text-lg text-white leading-snug hover:text-[#63D69B] transition">
                    {product.name}
                  </h3>

                </Link>

                {/* Rating */}

                {product.rating && (
                  <div className="flex items-center gap-2 mt-3">

                    <span className="text-yellow-400 text-sm">
                      ★
                    </span>

                    <span className="text-sm text-gray-300">
                      {product.rating}
                    </span>

                    {product.reviews && (
                      <span className="text-xs text-gray-600">
                        ({product.reviews})
                      </span>
                    )}

                  </div>
                )}

                {/* Specs */}

                {product.specs && (
                  <div className="flex flex-wrap gap-2 mt-4">

                    {product.specs.ram && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#11251B] border border-[#1F3A2D] text-xs text-gray-400">
                        {product.specs.ram}
                      </span>
                    )}

                    {product.specs.storage && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#11251B] border border-[#1F3A2D] text-xs text-gray-400">
                        {product.specs.storage}
                      </span>
                    )}

                    {product.specs.battery && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#11251B] border border-[#1F3A2D] text-xs text-gray-400">
                        {product.specs.battery}
                      </span>
                    )}

                  </div>
                )}

                {/* Price */}

                <div className="mt-5">

                  <span className="font-display text-2xl font-bold text-[#63D69B]">
                    {formatINR(product.price)}
                  </span>

                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-600 line-through">
                      {formatINR(product.oldPrice)}
                    </span>
                  )}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-5">

                  {/* Add Cart */}

                  <button
                    type="button"
                    onClick={() => addItem(product, 1)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5D43] hover:bg-[#2FA36B] text-white px-4 py-3 font-semibold transition-all"
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>

                  {/* Remove */}

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className="w-12 h-12 shrink-0 rounded-xl border border-red-500/40 bg-red-500/5 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}