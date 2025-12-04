import React, { useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

// NOTE: Please ensure 'primary' color is correctly defined in your Tailwind config (e.g., #2563EB)

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    // Background: Dark gradient for a sleek look
    <div className=" flex items-center justify-center bg-linear-to-r from-blue-800 to-indigo-600 p-2">
      
      {/* Main Card: Black background, max-w-5xl for better spacing */}
      <div className="bg-black w-full max-w-5xl h-8/12 shadow-2xl flex overflow-hidden ">
        
        {/* --- LEFT SIDE: FORM (Dark Mode) --- */}
        <div className="w-full md:w-1/2 p-4 md:p-14">
          <form className="flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-white">
              Create an account
            </h2>
            <p className="text-gray-400 text-lg mb-2">
              Start your educational journey today
            </p>

            {/* Row for First and Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                // Dark Input Styling
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                // Dark Input Styling
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              // Dark Input Styling
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
            />

            {/* Password with Toggle Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                // Dark Input Styling
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 placeholder-gray-500"
              />
              <span
                // Icon Color changed for dark theme
                className="absolute right-4 top-4 text-gray-500 cursor-pointer hover:text-primary transition"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mt-1">
              {/* Checkbox color uses Primary */}
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 text-primary bg-gray-800 border-gray-700 rounded focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{" "}
                <span className="text-primary font-semibold cursor-pointer hover:underline">
                  terms & conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              // Button uses Primary color with hover effect
              className="w-full bg-primary hover:bg-accent cursor-pointer text-white font-bold py-3 rounded-lg transition duration-300 mt-4 shadow-lg shadow-primary/30"
            >
              Create Account
            </button>
            
            {/* Login Link */}
            <p className="text-gray-400 text-base text-center">
              Already have account?{" "}
              <Link to='/login' className="text-lg font-semibold hover:underline text-primary cursor-pointer transition">
                Login
              </Link>
            </p>

            {/* Divider (Color adjusted for dark theme) */}
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-700"></div>
              <span className="shrink mx-4 text-gray-500 text-sm">
                Or Login With
              </span>
              <div className="grow border-t border-gray-700"></div>
            </div>

            {/* Social Login Buttons (Dark Mode Style) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                // Dark background hover effect
                className="flex-1 flex items-center cursor-pointer justify-center gap-2 border border-gray-700 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 text-gray-300 font-medium"
              >
                <FcGoogle size={20} /> Google
              </button>
              <button 
                // Dark background hover effect
                className="flex-1 flex items-center cursor-pointer justify-center gap-2 border border-gray-700 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 text-gray-300 font-medium"
              >
                <FaApple className="text-white" size={20} /> Apple
              </button>
            </div>
          </form>
        </div>

        {/* --- RIGHT SIDE: EDUCATIONAL IMAGE --- */}
        <div className="hidden md:block w-1/2 relative bg-gray-800">
          {/* Using a placeholder image for educational context */}
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
              <p className="text-lg text-blue-100">Join the world's largest educational platform.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;