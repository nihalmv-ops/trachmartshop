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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#E4E8E2] shadow-sm">

      <div className="container-shell flex items-center justify-between h-20">

        {/* Logo */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EDF5EC] border border-[#D7E3D4]">
            <Cpu className="text-[#5E7D5A]" size={22} />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-[#243224]">
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
                    ? "bg-[#5E7D5A] text-white shadow-md"
                    : "text-[#5B675B] hover:bg-[#F2F6F1] hover:text-[#243224]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button className="hidden sm:flex w-11 h-11 items-center justify-center rounded-xl bg-[#F5F8F4] hover:bg-[#EDF5EC] transition">
            <Search
              size={20}
              className="text-[#5E7D5A]"
            />
          </button>

          <Link
            to="/cart"
            className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#F5F8F4] hover:bg-[#EDF5EC] transition"
          >
            <ShoppingCart
              size={20}
              className="text-[#5E7D5A]"
            />

            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#5E7D5A] text-white text-[11px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#F5F8F4]"
          >
            {open ? (
              <X
                size={22}
                className="text-[#243224]"
              />
            ) : (
              <Menu
                size={22}
                className="text-[#243224]"
              />
            )}
          </button>

        </div>

      </div>

      {/* Mobile */}

      {open && (
        <nav className="md:hidden bg-white border-t border-[#E4E8E2]">

          <div className="container-shell py-4 flex flex-col gap-2">

            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium transition ${
                    isActive
                      ? "bg-[#5E7D5A] text-white"
                      : "text-[#5B675B] hover:bg-[#F3F7F2]"
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