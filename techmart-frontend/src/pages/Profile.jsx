import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Camera,
  Edit3,
  LogOut,
  Heart,
  Package,
  Trash2,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";

export default function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const {
    user,
    logout,
    updateProfileImage,
  } = useAuth();

  const { count: wishlistCount } = useWishlist();

  if (!user) {
    return (
      <div className="container-shell py-24 text-center">

        <div className="w-20 h-20 mx-auto rounded-2xl bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">
          <User
            size={34}
            className="text-[#63D69B]"
          />
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold text-white">
          Login Required
        </h1>

        <p className="mt-3 text-gray-400">
          Please login to view your profile.
        </p>

        <Link
          to="/login"
          className="btn-primary inline-flex mt-7"
        >
          Login
        </Link>

      </div>
    );
  }

  // --------------------------------
  // CHANGE PROFILE IMAGE
  // --------------------------------

  function handleImageChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Profile image must be less than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      updateProfileImage(reader.result);
    };

    reader.readAsDataURL(file);

    // Allows selecting the same image again
    e.target.value = "";
  }

  // --------------------------------
  // REMOVE PROFILE IMAGE
  // --------------------------------

  function handleRemoveImage() {
    if (!user.profileImage) return;

    updateProfileImage(null);
  }

  // --------------------------------
  // LOGOUT
  // --------------------------------

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="container-shell py-12 md:py-16">

      {/* Header */}

      <div className="mb-10">

        <p className="text-[#63D69B] uppercase tracking-[4px] text-sm font-semibold">
          My Account
        </p>

        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-3 text-gray-400">
          Manage your account and personal information.
        </p>

      </div>

      {/* Profile Card */}

      <div className="max-w-4xl">

        <div className="relative overflow-hidden rounded-3xl bg-[#0B0B0B] border border-[#1F3A2D] shadow-[0_20px_60px_rgba(0,0,0,.45)]">

          {/* Green glow */}

          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#1F5D43] blur-[120px] opacity-20" />

          <div className="relative p-6 md:p-10">

            {/* Profile top */}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

              <div className="flex items-center gap-6">

                {/* Profile Image */}

                <div className="relative shrink-0">

                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-[#11251B] border-2 border-[#2C5E47] shadow-[0_0_30px_rgba(99,214,155,.12)]">

                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User
                          size={52}
                          className="text-[#63D69B]"
                        />
                      </div>
                    )}

                  </div>

                  {/* Image buttons */}

                  <div className="absolute -bottom-2 right-0 flex items-center gap-2">

                    {/* Camera / Upload */}

                    <button
                      type="button"
                      onClick={() =>
                        fileInputRef.current?.click()
                      }
                      className="w-10 h-10 rounded-full bg-[#1F5D43] border-2 border-[#0B0B0B] text-white flex items-center justify-center hover:bg-[#2FA36B] transition-all shadow-lg"
                      aria-label="Change profile photo"
                    >
                      <Camera size={18} />
                    </button>

                    {/* Remove */}

                    {user.profileImage && (
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="w-10 h-10 rounded-full bg-[#101010] border-2 border-[#0B0B0B] text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg"
                        aria-label="Remove profile photo"
                      >
                        <Trash2 size={17} />
                      </button>
                    )}

                  </div>

                  {/* Hidden File Input */}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </div>

                {/* User info */}

                <div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {user.name}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    {user.email}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#11251B] border border-[#1F3A2D] px-3 py-1.5">

                    <span className="w-2 h-2 rounded-full bg-[#63D69B]" />

                    <span className="text-xs text-[#63D69B] font-medium">
                      Active Account
                    </span>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3">

                <Link
                  to="/profile/edit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5D43] hover:bg-[#2FA36B] text-white px-5 py-3 font-semibold transition-all shadow-lg"
                >
                  <Edit3 size={18} />
                  Edit Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/40 bg-red-500/5 text-red-400 hover:bg-red-500 hover:text-white px-5 py-3 font-semibold transition-all"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t border-[#1F3A2D]" />

            {/* Account stats */}

            <div className="grid sm:grid-cols-2 gap-4">

              {/* Wishlist */}

              <Link
                to="/wishlist"
                className="group rounded-2xl bg-[#101010] border border-[#1F3A2D] p-5 hover:border-[#2C5E47] hover:bg-[#11251B] transition-all"
              >

                <div className="flex items-center justify-between">

                  <div className="w-11 h-11 rounded-xl bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">

                    <Heart
                      size={21}
                      className="text-[#63D69B]"
                    />

                  </div>

                  <span className="text-2xl font-bold text-white">
                    {wishlistCount}
                  </span>

                </div>

                <h3 className="mt-4 font-semibold text-white">
                  Wishlist
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your saved products
                </p>

              </Link>

              {/* Orders */}

              <Link
                to="/orders"
                className="group rounded-2xl bg-[#101010] border border-[#1F3A2D] p-5 hover:border-[#2C5E47] hover:bg-[#11251B] transition-all"
              >

                <div className="flex items-center justify-between">

                  <div className="w-11 h-11 rounded-xl bg-[#11251B] border border-[#2C5E47] flex items-center justify-center">

                    <Package
                      size={21}
                      className="text-[#63D69B]"
                    />

                  </div>

                  <span className="text-[#63D69B] text-sm font-semibold">
                    View
                  </span>

                </div>

                <h3 className="mt-4 font-semibold text-white">
                  Order History
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  View your previous orders
                </p>

              </Link>

            </div>

            {/* Change photo hint */}

            <p className="mt-6 text-xs text-gray-600">
              Profile photo: JPG, PNG or WEBP · Maximum 2MB
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}