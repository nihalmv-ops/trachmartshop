import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Camera,
  Trash2,
  Save,
  ArrowLeft,
  Mail,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function EditProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const {
    user,
    updateProfile,
    updateProfileImage,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

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
          Please login to edit your profile.
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

  function handleImageChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
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
  }

  function removeProfileImage() {
    updateProfileImage(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    if (!email.trim()) {
      return;
    }

    updateProfile({
      name: name.trim(),
      email: email.trim(),
    });

    navigate("/profile");
  }

  return (
    <div className="container-shell py-12">

      {/* Header */}

      <div className="mb-10">

        <Link
          to="/profile"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#63D69B] transition mb-6"
        >
          <ArrowLeft size={18} />
          Back to Profile
        </Link>

        <p className="text-[#63D69B] uppercase tracking-[4px] text-sm font-semibold">
          Account Settings
        </p>

        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-white">
          Edit Profile
        </h1>

        <p className="mt-3 text-gray-400">
          Update your personal information and profile photo.
        </p>

      </div>

      {/* Main Card */}

      <div className="max-w-4xl">

        <div className="relative overflow-hidden rounded-3xl bg-[#0B0B0B] border border-[#1F3A2D] shadow-[0_20px_60px_rgba(0,0,0,.45)]">

          {/* Glow */}

          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#1F5D43] blur-[120px] opacity-20" />

          <div className="relative p-6 md:p-10">

            {/* Profile Photo */}

            <div className="flex flex-col items-center">

              <div className="relative">

                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#11251B] border-2 border-[#2C5E47] shadow-[0_0_30px_rgba(99,214,155,.12)]">

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

                {/* Camera */}

                <button
                  type="button"
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-[#1F5D43] border-2 border-[#0B0B0B] text-white flex items-center justify-center hover:bg-[#2FA36B] transition-all shadow-lg"
                  aria-label="Change profile photo"
                >
                  <Camera size={18} />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </div>

              <h2 className="mt-5 text-xl font-semibold text-white">
                {user.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                JPG, PNG or WEBP · Maximum 2MB
              </p>

              {/* Remove Photo */}

              {user.profileImage && (
                <button
                  type="button"
                  onClick={removeProfileImage}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition"
                >
                  <Trash2 size={16} />
                  Remove Profile Photo
                </button>
              )}

            </div>

            {/* Divider */}

            <div className="my-10 border-t border-[#1F3A2D]" />

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}

              <div>

                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder-gray-600 pl-12 pr-4 py-3.5 outline-none focus:border-[#63D69B] focus:ring-1 focus:ring-[#63D69B]/30 transition"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder-gray-600 pl-12 pr-4 py-3.5 outline-none focus:border-[#63D69B] focus:ring-1 focus:ring-[#63D69B]/30 transition"
                  />

                </div>

              </div>

              {/* Password Note */}

              <div className="rounded-2xl bg-[#11251B]/50 border border-[#1F3A2D] p-5">

                <p className="text-sm font-semibold text-[#63D69B]">
                  Password
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Your current password is kept unchanged.
                  Password management can be added separately.
                </p>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">

                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5D43] hover:bg-[#2FA36B] text-white px-6 py-3.5 font-semibold transition-all shadow-lg"
                >
                  <Save size={18} />
                  Save Changes
                </button>

                <Link
                  to="/profile"
                  className="sm:w-40 inline-flex items-center justify-center rounded-xl border border-[#2C5E47] bg-[#101010] hover:bg-[#13251D] text-gray-300 hover:text-[#63D69B] px-6 py-3.5 font-semibold transition"
                >
                  Cancel
                </Link>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}