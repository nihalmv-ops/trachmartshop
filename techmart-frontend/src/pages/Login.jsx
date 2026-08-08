import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/profile");
    }
  }

  return (
    <div className="container-shell py-16 min-h-[75vh] flex items-center justify-center">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <p className="text-[#63D69B] uppercase tracking-[4px] text-sm font-semibold">
            Welcome Back
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold text-white">
            Login
          </h1>

          <p className="mt-3 text-gray-400">
            Login to continue shopping.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#0B0B0B] border border-[#1F3A2D] p-7 md:p-8 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
        >

          {/* Email */}

          <div>
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl bg-[#101010] border border-[#1F3A2D] text-white placeholder:text-gray-600 pl-11 pr-4 py-3 outline-none focus:border-[#63D69B] transition"
              />

            </div>

          </div>

          <button
            type="submit"
            className="mt-7 w-full btn-primary"
          >
            <LogIn size={18} />
            Login
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#63D69B] font-semibold hover:text-white transition"
            >
              Create account
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}