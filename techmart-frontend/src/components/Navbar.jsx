import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, Cpu } from "lucide-react";
import siteConfig from "../data/siteConfig.json";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-base/90 backdrop-blur-md border-b border-border">
      <div className="container-shell flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="bg-accent/10 border border-accent/30 text-accent rounded-lg p-1.5">
            <Cpu size={20} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            {siteConfig.siteName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-ink-muted hover:text-ink hover:bg-surface-light"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden sm:flex p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-light transition-colors"
            aria-label="Search products"
          >
            <Search size={19} />
          </button>
          <Link
            to="/cart"
            className="relative p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-light transition-colors"
            aria-label={`Cart, ${count} items`}
          >
            <ShoppingCart size={19} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-base text-[10px] font-bold font-mono rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-light transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-base">
          <div className="container-shell flex flex-col py-2">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "text-accent bg-accent/10" : "text-ink-muted hover:text-ink"
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
