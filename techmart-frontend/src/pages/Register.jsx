import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  UserPlus,
  Eye,
  EyeOff,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirm) {
      return;
    }

    const success = register(form);

    if (success) {
      navigate("/profile");
    }
  }

  return (
    <div className="container-shell min-h-[75vh] py-16 flex items-center justify-center">

      <div className="w-full max-w-md">

        {/* Heading */}

        <div className="text-center mb-8">

          <p className="text-[#63D69B] uppercase tracking-[4px] text-sm font-semibold">
            Join TechNest
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-3 text-gray-400">
            Create your account and start shopping.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#0B0B0B] border border-[#1F3A2D] p-7 md:p-8 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
        >

          {/* Name */}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
              />

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder:text-gray-600 pl-11 pr-4 py-3 outline-none focus:border-[#63D69B] transition"
              />

            </div>
          </div>

          {/* Email */}

          <div className="mt-5">

            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
              />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder:text-gray-600 pl-11 pr-4 py-3 outline-none focus:border-[#63D69B] transition"
              />

            </div>
          </div>

          {/* Password */}

          <div className="mt-5">

  <label className="block text-sm font-medium text-gray-300 mb-2">
    Password
  </label>

  <div className="relative">

    <Lock
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
    />

    <input
      type={showPassword ? "text" : "password"}
      name="password"
      required
      minLength={6}
      value={form.password}
      onChange={handleChange}
      placeholder="Minimum 6 characters"
      className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder:text-gray-600 pl-11 pr-12 py-3 outline-none focus:border-[#63D69B] transition"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#63D69B] transition"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? (
        <EyeOff size={19} />
      ) : (
        <Eye size={19} />
      )}
    </button>

  </div>

</div>

          {/* Confirm Password */}

         <div className="mt-5">

  <label className="block text-sm font-medium text-gray-300 mb-2">
    Confirm Password
  </label>

  <div className="relative">

    <Lock
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#63D69B]"
    />

    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirm"
      required
      minLength={6}
      value={form.confirm}
      onChange={handleChange}
      placeholder="Confirm your password"
      className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder:text-gray-600 pl-11 pr-12 py-3 outline-none focus:border-[#63D69B] transition"
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#63D69B] transition"
      aria-label={
        showConfirmPassword
          ? "Hide confirm password"
          : "Show confirm password"
      }
    >
      {showConfirmPassword ? (
        <EyeOff size={19} />
      ) : (
        <Eye size={19} />
      )}
    </button>

  </div>

</div>
          {/* Submit */}

          <button
            type="submit"
            className="mt-7 w-full btn-primary"
          >
            <UserPlus size={18} />
            Create Account
          </button>

          {/* Login */}

          <p className="text-center text-sm text-gray-400 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#63D69B] font-semibold hover:text-white transition"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}