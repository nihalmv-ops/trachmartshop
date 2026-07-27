import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  Cpu,
} from "lucide-react";

import siteConfig from "../data/siteConfig.json";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/90 border-b border-[#1F3A2D] shadow-[0_8px_30px_rgba(0,0,0,.55)]">

      <div className="container-shell flex items-center justify-between h-20">

        {/* Logo */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#11251B] border border-[#2C5E47] shadow-lg">
            <Cpu className="text-[#63D69B]" size={22} />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              {siteConfig.siteName}
            </h2>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-2">

          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#1F5D43] text-white shadow-lg"
                    : "text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button className="hidden sm:flex w-11 h-11 items-center justify-center rounded-xl bg-[#101010] border border-[#1F3A2D] hover:bg-[#13251D] transition-all">
            <Search
              size={20}
              className="text-[#63D69B]"
            />
          </button>

          <Link
            to="/cart"
            className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#101010] border border-[#1F3A2D] hover:bg-[#13251D] transition-all"
          >
            <ShoppingCart
              size={20}
              className="text-[#63D69B]"
            />

            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2FA36B] text-white text-[11px] font-bold flex items-center justify-center shadow-lg">
                {count}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#101010] border border-[#1F3A2D]"
          >
            {open ? (
              <X
                size={22}
                className="text-white"
              />
            ) : (
              <Menu
                size={22}
                className="text-white"
              />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <nav className="md:hidden bg-[#080808] border-t border-[#1F3A2D] backdrop-blur-xl">

          <div className="container-shell py-4 flex flex-col gap-2">

            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#1F5D43] text-white"
                      : "text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </div>

        </nav>
      )}

    </header>
  );
}