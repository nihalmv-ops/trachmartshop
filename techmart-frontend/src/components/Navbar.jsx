import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  Cpu,
  Heart,
  User,
  LogOut,
  Edit3,
} from "lucide-react";

import siteConfig from "../data/siteConfig.json";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();

  const {
    user,
    isLoggedIn,
    logout,
  } = useAuth();

  function handleLogout() {
    setProfileOpen(false);
    setOpen(false);
    logout();
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/90 border-b border-[#1F3A2D] shadow-[0_8px_30px_rgba(0,0,0,.55)]">

      <div className="container-shell flex items-center justify-between h-20">

        {/* Logo */}

        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            setProfileOpen(false);
          }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#11251B] border border-[#2C5E47] shadow-lg">
            <Cpu
              size={22}
              className="text-[#63D69B]"
            />
          </div>

          <h2 className="font-display text-2xl font-bold text-white">
            {siteConfig.siteName}
          </h2>
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

          {/* Search */}

          <button
            type="button"
            className="hidden sm:flex w-11 h-11 items-center justify-center rounded-xl bg-[#101010] border border-[#1F3A2D] hover:bg-[#13251D] transition-all"
          >
            <Search
              size={20}
              className="text-[#63D69B]"
            />
          </button>

          {/* Wishlist */}

          <Link
            to="/wishlist"
            onClick={() => setProfileOpen(false)}
            className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#101010] border border-[#1F3A2D] hover:bg-[#13251D] transition-all"
          >
            <Heart
              size={20}
              className="text-[#63D69B]"
            />

            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            onClick={() => setProfileOpen(false)}
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

          {/* PROFILE */}

          <div className="relative">

            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#101010] border border-[#1F3A2D] hover:bg-[#13251D] transition-all overflow-hidden"
              aria-label="Profile menu"
            >
              {isLoggedIn && user?.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User
                  size={20}
                  className="text-[#63D69B]"
                />
              )}
            </button>

            {/* Profile Dropdown */}

            {profileOpen && (
              <div className="absolute right-0 top-14 w-64 rounded-2xl bg-[#0B0B0B] border border-[#1F3A2D] shadow-[0_20px_50px_rgba(0,0,0,.65)] overflow-hidden">

                {isLoggedIn ? (
                  <>
                    {/* User Info */}

                    <div className="p-4 border-b border-[#1F3A2D]">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">

                          {user?.profileImage ? (
                            <img
                              src={user.profileImage}
                              alt={user.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User
                              size={20}
                              className="text-[#63D69B]"
                            />
                          )}

                        </div>

                        <div className="min-w-0">

                          <p className="font-semibold text-white truncate">
                            {user?.name}
                          </p>

                          <p className="text-xs text-gray-500 truncate">
                            {user?.email}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* Profile */}

                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B] transition"
                    >
                      <User size={18} />
                      Profile
                    </Link>

                    {/* Edit Profile */}

                    <Link
                      to="/profile/edit"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B] transition"
                    >
                      <Edit3 size={18} />
                      Edit Profile
                    </Link>

                    {/* Logout */}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </>
                ) : (
                  <>
                    {/* Guest */}

                    <div className="p-4">

                      <div className="flex items-center gap-3 mb-4">

                        <div className="w-11 h-11 rounded-xl bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">
                          <User
                            size={20}
                            className="text-[#63D69B]"
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-white">
                            Welcome
                          </p>

                          <p className="text-xs text-gray-500">
                            Login to your account
                          </p>
                        </div>

                      </div>

                      <Link
                        to="/login"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center justify-center w-full rounded-xl bg-[#1F5D43] hover:bg-[#2FA36B] text-white py-3 font-semibold transition"
                      >
                        Login
                      </Link>

                      <Link
                        to="/register"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center justify-center w-full mt-2 rounded-xl border border-[#2C5E47] text-[#63D69B] hover:bg-[#11251B] py-3 font-semibold transition"
                      >
                        Create Account
                      </Link>

                    </div>
                  </>
                )}

              </div>
            )}

          </div>

          {/* Mobile Menu */}

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

      {/* Mobile Navigation */}

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

            {/* Mobile Profile */}

            <Link
              to={isLoggedIn ? "/profile" : "/login"}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B] transition"
            >
              <User size={19} />
              {isLoggedIn ? "Profile" : "Login"}
            </Link>

            {isLoggedIn && (
              <Link
                to="/profile/edit"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#13251D] hover:text-[#63D69B] transition"
              >
                <Edit3 size={19} />
                Edit Profile
              </Link>
            )}

          </div>

        </nav>
      )}

    </header>
  );
}