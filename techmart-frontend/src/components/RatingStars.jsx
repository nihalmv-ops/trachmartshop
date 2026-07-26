import { Star } from "lucide-react";

export default function RatingStars({
  rating,
  reviews,
  size = 16,
}) {
  const full = Math.round(rating);

  return (
    <div className="flex items-center gap-2">

      <div className="flex items-center gap-1">

        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={size}
            className={
              index < full
                ? "fill-[#F6C453] text-[#F6C453]"
                : "text-[#D6DFD4]"
            }
          />
        ))}

      </div>

      <div className="flex items-center gap-1">

        <span className="text-sm font-semibold text-[#243224]">
          {rating.toFixed(1)}
        </span>

        {reviews != null && (
          <span className="text-sm text-[#7A847A]">
            ({reviews} Reviews)
          </span>
        )}

      </div>

    </div>
  );
}