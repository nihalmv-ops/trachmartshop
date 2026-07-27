import { Link } from "react-router-dom";
import { Laptop, Smartphone } from "lucide-react";
import "./Hero.css";
import laptopVideo from "../assets/laptop-demo.mp4";
import mobileVideo from "../assets/mobile-demo.mp4";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-base border-b border-border">

      {/* Green Glow */}
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-accent opacity-20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent opacity-10 blur-[170px]" />

      <div className="container-shell relative py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-surface border border-border">

            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>

            <span className="text-xs tracking-wider font-semibold text-accent">
              NEW ARRIVALS EVERY WEEK
            </span>

          </div>

          <h1 className="font-display font-bold text-5xl lg:text-6xl leading-tight text-ink">

            Find Your

            <br />

            <span className="text-accent">
              Perfect Device.
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-ink-muted max-w-lg">

            Explore premium laptops and smartphones with detailed
            specifications, trusted brands, competitive pricing,
            and fast delivery.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/shop/laptop"
              className="btn-primary"
            >
              <Laptop size={20}/>
              Shop Laptops
            </Link>

            <Link
              to="/shop/mobile"
              className="btn-outline"
            >
              <Smartphone size={20}/>
              Shop Mobiles
            </Link>

          </div>

          <div className="mt-12 flex gap-10">

            <Stat value="120+" label="Products"/>

            <Stat value="4.9★" label="Customer Rating"/>

            <Stat value="Free" label="Shipping"/>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden md:flex justify-center items-center h-[500px]">

          <DeviceMockups/>

        </div>

      </div>

    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-ink">
        {value}
      </h3>

      <p className="text-ink-muted">
        {label}
      </p>
    </div>
  );
}

function DeviceMockups() {
  return (
    <div className="relative flex items-center justify-center w-full h-[800px]">

      <div className="absolute w-[430px] h-[430px] rounded-full bg-accent opacity-20 blur-[140px]" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[700px] rounded-3xl shadow-2xl object-cover animate-[float_6s_ease-in-out_infinite]"
      >
        <source src={laptopVideo} type="video/mp4"/>
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-[200px] bottom-10 right-2 rounded-[28px] shadow-2xl object-cover animate-[float_5s_ease-in-out_infinite]"
      >
        <source src={mobileVideo} type="video/mp4"/>
      </video>

    </div>
  );
}