import React, { useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

// NOTE: Please ensure 'primary', 'accent', and other custom colors are correctly defined in your Tailwind config.

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    // Background: Dark theme maintained
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-800 to-indigo-600 p-2">
      {/* Main Card: Black background, max-w-5xl */}
      <div className="bg-black w-full max-w-5xl  shadow-2xl flex overflow-hidden ">
        {/* --- LEFT SIDE: EDUCATIONAL IMAGE --- */}
        <div className="hidden md:block w-1/2 relative bg-gray-800">
          <img
            src={assets.HeroImg}
            alt="Education"
            className="w-full h-full object-cover opacity-80 mix-blend-lighten"
          />
          {/* Overlay with Primary Color Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-accent/80 to-primary/30 flex items-end p-12">
            <div className="text-white">
              <h3 className="text-4xl font-extrabold drop-shadow-lg mb-3">
                Knowledge Awaits
              </h3>
              <p className="text-lg text-blue-100">
                Unlock your potential today.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: LOGIN FORM --- */}
        <div className="w-full md:w-1/2 p-6 md:p-14">
          <form className="flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-white">
              Login to your account
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Welcome back! Please enter your details.
            </p>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
            />

            {/* Password with Toggle Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
              />
              <span
                className="absolute right-4 top-4 text-gray-500 cursor-pointer hover:text-primary transition"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm mt-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-primary bg-gray-800 border-gray-700 rounded focus:ring-primary"
                />
                <label htmlFor="remember" className="text-gray-400 select-none">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent cursor-pointer text-white font-bold py-3 rounded-lg transition duration-300 mt-4 shadow-lg shadow-primary/30"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-gray-400 text-base text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-lg font-semibold hover:underline text-primary cursor-pointer transition"
              >
                Sign Up
              </Link>
            </p>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-700"></div>
              <span className="shrink mx-4 text-gray-500 text-sm">
                Or Login With
              </span>
              <div className="grow border-t border-gray-700"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center cursor-pointer justify-center gap-2 border border-gray-700 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 text-gray-300 font-medium">
                <FcGoogle size={20} /> Google
              </button>
              <button className="flex-1 flex items-center cursor-pointer justify-center gap-2 border border-gray-700 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 text-gray-300 font-medium">
                <FaApple className="text-white" size={20} /> Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
