import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <section className="container-shell py-20">
      <div
        className="
        relative overflow-hidden rounded-3xl
        border border-[#1F3A2D]
        bg-gradient-to-br
        from-[#050505]
        via-[#0D1713]
        to-[#10221A]
        shadow-[0_20px_60px_rgba(0,0,0,.6)]
        p-8 md:p-12"
      >

        {/* Top Glow */}

        <div className="absolute -top-28 -left-24 w-80 h-80 rounded-full bg-[#1D5C42] blur-[120px] opacity-30" />

        {/* Bottom Glow */}

        <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-[#0D8C66] blur-[140px] opacity-20" />

        {/* Center Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,140,95,.12),transparent_65%)]"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div className="max-w-lg">

            <p className="text-[#63D69B] font-semibold uppercase tracking-[4px] text-sm">
              Newsletter
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Never Miss a Deal
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Subscribe to receive exclusive offers, price-drop alerts,
              premium laptops, flagship smartphones, and members-only
              discounts directly in your inbox.
            </p>

          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-auto flex flex-col sm:flex-row gap-3"
          >

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
              w-full sm:w-80
              rounded-xl
              border border-[#2A5E45]
              bg-[#111111]
              text-white
              placeholder:text-gray-500
              px-5 py-3
              outline-none
              focus:border-[#63D69B]
              focus:ring-2
              focus:ring-[#2FA36B]/30
              transition-all"
            />

            <button
              type="submit"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#1F5D43]
              px-6
              py-3
              font-semibold
              text-white
              shadow-lg
              hover:bg-[#2E8A60]
              hover:scale-105
              transition-all
              duration-300"
            >
              <Send size={18} />
              Subscribe
            </button>

          </form>

        </div>

        {submitted && (
          <div
            className="
            relative
            mt-6
            rounded-xl
            border border-[#2A5E45]
            bg-[#11251B]
            px-4
            py-3
            text-[#63D69B]
            font-medium"
          >
            ✅ Thank you for subscribing! We'll notify you about our latest deals.
          </div>
        )}

      </div>
    </section>
  );
}