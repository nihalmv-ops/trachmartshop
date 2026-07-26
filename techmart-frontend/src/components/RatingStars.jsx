import { Star } from "lucide-react";

export default function RatingStars({ rating, reviews, size = 14 }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < full ? "fill-accent text-accent" : "text-border"}
          />
        ))}
      </div>
      <span className="text-xs text-ink-muted font-mono">
        {rating.toFixed(1)}
        {reviews != null && <span className="text-ink-faint"> ({reviews})</span>}
      </span>
    </div>
  );
}
