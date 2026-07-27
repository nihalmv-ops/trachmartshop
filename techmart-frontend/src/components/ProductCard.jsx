import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import RatingStars from "./RatingStars";
import SpecStrip from "./SpecStrip";
import { formatINR, discountPercent } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function ProductCard({
  product,
  activeVideo: externalActiveVideo,
  setActiveVideo: externalSetActiveVideo,
}) {
  const { addItem } = useCart();

  const discount = discountPercent(product.price, product.oldPrice);

  const [internalActiveVideo, internalSetActiveVideo] = useState(null);

  const activeVideo =
    externalActiveVideo ?? internalActiveVideo;

  const setActiveVideo =
    externalSetActiveVideo ?? internalSetActiveVideo;

  const videoRef = useRef(null);

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

  return (
  <div
  className="relative aspect-square overflow-hidden bg-surface-light cursor-pointer"
  onClick={playVideo}
>
  {/* Product Image */}
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

  {/* Product Video */}
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

 
  {/* View Product Button */}
  {activeVideo === product.id && (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <Link
        to={`/product/${product.id}`}
        className="bg-black/80 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
      >
        View Product
      </Link>
    </div>
  )}

  {/* Discount Badge */}
  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
    {discount > 0 && (
      <span className="bg-sale text-base text-[11px] font-bold px-2 py-1 rounded">
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
);
}