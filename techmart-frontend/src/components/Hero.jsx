import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-accent/20 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-shell relative py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            NEW ARRIVALS EVERY WEEK
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
            Specs first.
            <br />
            <span className="text-accent">Marketing, second.</span>
          </h1>
          <p className="mt-6 text-ink-muted text-base sm:text-lg max-w-md">
            Every laptop and phone on TechNest ships with its full datasheet
            up front — processor, RAM, storage, battery — so you compare
            hardware, not adjectives.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/shop/laptop" className="btn-primary">
              <Laptop size={18} /> Shop Laptops
            </Link>
            <Link to="/shop/mobile" className="btn-outline">
              <Smartphone size={18} /> Shop Mobiles
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm">
            <Stat value="120+" label="Devices listed" />
            <Stat value="4.6/5" label="Avg. rating" />
            <Stat value="7-day" label="Easy returns" />
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center h-[420px]">
          <DeviceMockups />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display font-bold text-xl text-ink">{value}</p>
      <p className="text-xs text-ink-faint">{label}</p>
    </div>
  );
}

function DeviceMockups() {
  return (
    <div className="relative w-full max-w-md">
      {/* Laptop frame */}
      <div className="relative mx-auto w-[340px]">
        <div className="rounded-t-xl border border-border bg-surface p-2 shadow-card">
          <div className="rounded-lg overflow-hidden aspect-[16/10] bg-surface-light">
            <img
              src="https://picsum.photos/seed/hero-laptop-screen/640/400"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="h-3 bg-surface-light border-x border-b border-border rounded-b-md" />
        <div className="h-1.5 w-24 mx-auto bg-border rounded-b-lg" />
      </div>

      {/* Phone frame, overlapping bottom-right */}
      <div className="absolute -bottom-6 -right-6 w-32 rounded-[1.4rem] border-4 border-surface-light bg-surface shadow-glow overflow-hidden">
        <div className="aspect-[9/19]">
          <img
            src="https://picsum.photos/seed/hero-phone-screen/300/640"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
