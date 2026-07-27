import brands from "../data/brands.json";

export default function BrandStrip() {
  return (
    <section className=" border-y border-[#E2E8E0] py-8 overflow-hidden">

      <div className="relative">

        <div className="flex w-max gap-16 animate-[scroll_30s_linear_infinite]">

          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
            >
              <span className="text-xl font-semibold tracking-wide hover: transition-colors duration-300 cursor-pointer">
                {brand}
              </span>
            </div>
          ))}

        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}