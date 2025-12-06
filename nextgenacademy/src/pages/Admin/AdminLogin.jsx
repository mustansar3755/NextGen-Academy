import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

const AdminLogin = () => {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // TEMP Admin Credentials (replace with backend later)
  const ADMIN_EMAIL = "admin@academy.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Save admin in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          role: "admin",
        })
      );

      navigate("/admin"); // redirect to dashboard
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-800 to-indigo-600 p-2">
      <div className="bg-black w-full max-w-5xl shadow-2xl flex overflow-hidden ">
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2 relative bg-gray-800">
          <img
            src={assets.AdminLog}
            alt="Education"
            className="w-full h-full object-cover opacity-80 mix-blend-lighten"
          />

          <div className="absolute inset-0 bg-linear-to-t from-accent/80 to-primary/30 flex items-end p-12">
            <div className="text-white">
              <h3 className="text-4xl font-extrabold drop-shadow-lg mb-3">
                Admin Panel
              </h3>
              <p className="text-lg text-blue-100">
                Secure access for administrators only.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-1/2 p-6 md:p-14">
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <h2 className="text-4xl font-extrabold text-white">
              Admin Login
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Enter your admin credentials to continue.
            </p>

            {/* Error Message */}
            {error && (
              <p className="bg-red-600 text-white px-4 py-2 rounded-lg text-center">
                {error}
              </p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary placeholder-gray-500"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary placeholder-gray-500"
                required
              />

              <span
                className="absolute right-4 top-4 text-gray-300 cursor-pointer hover:text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-lg transition shadow-lg shadow-primary/30"
            >
              Login as Admin
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
