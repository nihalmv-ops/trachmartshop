import { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Minus,
  Plus,
  ChevronLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import products from "../data/products.json";
import RatingStars from "../components/RatingStars";
import SpecStrip from "../components/SpecStrip";
import ProductCard from "../components/ProductCard";
import { formatINR, discountPercent } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const [playVideo, setPlayVideo] = useState(false);
const videoRef = useRef(null);

const [muted, setMuted] = useState(true);

useEffect(() => {
  if (!videoRef.current) return;

  const video = videoRef.current;

  video.muted = muted;

  if (playVideo) {
    video.currentTime = 0;

    const promise = video.play();

    if (promise !== undefined) {
      promise.catch(() => {});
    }
  } else {
    video.pause();
    video.currentTime = 0;
  }
}, [playVideo, muted]);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container-shell py-24 text-center">
        <p className="text-ink-muted">That product doesn't exist (anymore).</p>
        <Link to="/" className="btn-primary inline-flex mt-6">Back to home</Link>
      </div>
    );
  }

  const discount = discountPercent(product.price, product.oldPrice);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function toggleMute(e) {
  e.stopPropagation();

  const video = videoRef.current;

  if (!video) return;

  video.muted = !video.muted;

  setMuted(video.muted);
}

  return (
    <div className="container-shell py-10">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mb-6"
      >
        <ChevronLeft size={16} /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
       <div
  className="rounded-2xl overflow-hidden border border-border bg-surface aspect-square relative cursor-pointer"
  onClick={() => setPlayVideo(true)}
>
  <img
    src={product.image}
    alt={product.name}
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
      playVideo
        ? "opacity-0 scale-105"
        : "opacity-100"
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
    disablePictureInPicture
    controlsList="nodownload noplaybackrate noremoteplayback"
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
      playVideo
        ? "opacity-100"
        : "opacity-0 pointer-events-none"
    }`}
  />
  {playVideo && (
  <button
    onClick={toggleMute}
    className="absolute bottom-4 right-4
               w-11 h-11
               rounded-full
               bg-black/40
               backdrop-blur-xl
               border border-white/20
               flex items-center justify-center
               transition-all duration-300
               hover:scale-110
               z-20"
  >
    {muted ? (
      <VolumeX size={18} className="text-white" />
    ) : (
      <Volume2 size={18} className="text-white" />
    )}
  </button>
)}
</div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            {product.brand}
          </p>
          <h1 className="font-display font-bold text-3xl text-ink">{product.name}</h1>
          <div className="mt-3">
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>

          <p className="text-ink-muted mt-4 leading-relaxed">{product.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display font-bold text-3xl text-ink">
              {formatINR(product.price)}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-ink-faint line-through font-mono">
                  {formatINR(product.oldPrice)}
                </span>
                <span className="text-sale text-sm font-semibold font-mono">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-ink mb-2">Datasheet</h3>
            <SpecStrip specs={product.specs} />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-3 text-ink-muted hover:text-accent transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-mono text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-3 text-ink-muted hover:text-accent transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            <button onClick={handleAdd} className="btn-primary flex-1">
              <ShoppingCart size={18} />
              {added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <InfoChip icon={Truck} label="Free delivery" />
            <InfoChip icon={ShieldCheck} label="Brand warranty" />
            <InfoChip icon={RotateCcw} label="7-day returns" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display font-bold text-2xl text-ink mb-6">You might also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoChip({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5 bg-surface border border-border rounded-xl p-3">
      <Icon size={18} className="text-accent" />
      <span className="text-xs text-ink-muted">{label}</span>
    </div>
  );
}
