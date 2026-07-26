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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F8F7F3] via-[#FFFFFF] to-[#EEF4EE] border border-[#DDE5DA] shadow-xl p-8 md:p-12">

        {/* Background Glow */}

        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#C9D9C4] blur-[110px] opacity-40" />

        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#E4EFE2] blur-[120px] opacity-70" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div className="max-w-lg">

            <p className="text-[#5E7D5A] font-semibold uppercase tracking-widest text-sm">
              Newsletter
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#243224]">
              Never Miss a Deal
            </h2>

            <p className="mt-4 text-[#667266] leading-7">
              Subscribe to receive exclusive offers, price-drop alerts,
              and the latest laptops & smartphones directly in your inbox.
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
              className="w-full sm:w-80 rounded-xl border border-[#D5DED2] bg-white px-5 py-3 outline-none text-[#243224] placeholder:text-[#95A095] focus:border-[#5E7D5A] transition"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5E7D5A] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#4F6B4C] transition-all duration-300"
            >
              <Send size={18} />
              Subscribe
            </button>

          </form>

        </div>

        {submitted && (
          <div className="relative mt-6 rounded-xl bg-[#EDF5EC] border border-[#D4E3D1] px-4 py-3 text-[#4F6B4C] font-medium">
            ✅ Thank you for subscribing! We'll notify you about our latest deals.
          </div>
        )}

      </div>
    </section>
  );
}