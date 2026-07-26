import { Link } from "react-router-dom";
import { Laptop, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F7F3] via-[#FFFFFF] to-[#EEF4EE] border-b border-[#E4E8E2]">

      {/* Soft Green Glow */}
      <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-[#C9D9C4] blur-[120px] opacity-40" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#E5EFE3] blur-[150px] opacity-70" />

      <div className="container-shell relative py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5E7D5A] bg-[#EDF5EC] border border-[#C7D7C4] rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5E7D5A] animate-pulse"></span>
            NEW ARRIVALS EVERY WEEK
          </div>

          <h1 className="font-display font-bold text-5xl lg:text-6xl leading-tight text-[#243224]">
            Find Your
            <br />
            <span className="text-[#5E7D5A]">
              Perfect Device.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#687468] max-w-lg">
            Explore premium laptops and smartphones with detailed
            specifications, trusted brands, competitive pricing,
            and fast delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/shop/laptop"
              className="inline-flex items-center gap-2 rounded-xl bg-[#5E7D5A] px-7 py-3 text-white font-semibold shadow-lg hover:bg-[#4F6B4C] transition"
            >
              <Laptop size={20} />
              Shop Laptops
            </Link>

            <Link
              to="/shop/mobile"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CAD8C7] bg-white px-7 py-3 font-semibold text-[#2F3B2F] hover:bg-[#F5F8F3] transition"
            >
              <Smartphone size={20} />
              Shop Mobiles
            </Link>

          </div>

          <div className="mt-12 flex gap-8">

            <Stat value="120+" label="Products" />

            <Stat value="4.9★" label="Customer Rating" />

            <Stat value="Free" label="Shipping" />

          </div>

        </div>

        {/* Right */}

        <div className="relative hidden md:flex justify-center items-center h-[450px]">

          <DeviceMockups />

        </div>

      </div>

    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-[#2F3B2F]">{value}</h3>
      <p className="text-[#7A847A]">{label}</p>
    </div>
  );
}

function DeviceMockups() {
  return (
    <div className="relative w-full max-w-md">

      {/* Laptop */}

      <div className="relative mx-auto w-[360px]">

        <div className="rounded-2xl border border-[#D9E3D6] bg-white p-3 shadow-2xl">

          <div className="overflow-hidden rounded-xl aspect-[16/10]">

            <img
              src="https://i.pinimg.com/736x/2c/bb/27/2cbb279db19688c5d0146ae3143c7d78.jpg"
              alt=""
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        <div className="h-4 rounded-b-xl bg-[#E8EEE7] border-x border-b border-[#D9E3D6]" />

        <div className="mx-auto h-2 w-28 rounded-b-full bg-[#CDD9CB]" />

      </div>

      {/* Phone */}

      <div className="absolute -bottom-8 -right-8 w-36 rounded-[32px] border-[6px] border-white bg-white shadow-2xl overflow-hidden">

        <div className="aspect-[9/19]">

          <img
            src="https://i.pinimg.com/736x/bf/17/f5/bf17f52c5552de9b5703c5eb69d88f7e.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </div>
  );
}