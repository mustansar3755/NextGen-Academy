import React from "react";
// React Icons for visual appeal
import { FaUsers, FaShieldAlt, FaHeadset } from "react-icons/fa";
import assets from "../assets/assets";

// NOTE: This component is styled assuming 'accent' is a dark background color.

const WhyUs = () => {
  return (
    // Section uses 'bg-accent' for the background
    <section className="w-full bg-accent py-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-white/80 font-semibold tracking-widest text-sm">
            WHY CHOOSE US?
          </p>

          <h2 className="text-4xl font-extrabold text-white leading-tight mt-2">
            Unlock Your Success <br /> with Our Expertise
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            We provide tailored solutions and unmatched dedication, ensuring
            every client achieves their goals. From consultation to execution,
            our focus remains on delivering reliable and high-quality results.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-8 space-y-7">
            {/* Feature 1: Expert Team */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg shadow-lg">
                <FaUsers size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Dedicated Expert Team
                </h4>
                <p className="text-gray-300 mt-1">
                  Our professionals bring years of experience to solve your
                  toughest challenges.
                </p>
              </div>
            </div>

            {/* Feature 2: Guaranteed Quality */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg shadow-lg">
                <FaShieldAlt size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Guaranteed Quality & Reliability
                </h4>
                <p className="text-gray-300 mt-1">
                  We are committed to delivering results that meet the highest
                  standards.
                </p>
              </div>
            </div>

            {/* Feature 3: 24/7 Support */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-lg shadow-lg">
                <FaHeadset size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  24/7 Priority Support
                </h4>
                <p className="text-gray-300 mt-1">
                  We're always available to assist you, ensuring seamless
                  operation around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            // Placeholder image for general business/service/team
            src={assets.Teacher}
            alt="Professional team meeting or service visualization"
            className="rounded-xl shadow-2xl w-full max-w-md object-cover transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
        </div>
        {/* --- STATS / COUNTER SECTION --- */}
        <div className="text-white grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12 text-center">
          {/* Stat 1: Years of Experience */}
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-white/75">
              12+
            </p>
            <p className="text-lg font-medium text-white/90 mt-1">
              Years of Experience
            </p>
          </div>

          {/* Stat 2: Successful Students */}
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-white/75">
              4.5K
            </p>
            <p className="text-lg font-medium text-white/90 mt-1">
             Successful Students
            </p>
          </div>

          {/* Stat 3: Expert Staff */}
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-white/75">
              35+
            </p>
            <p className="text-lg font-medium text-white/90 mt-1">
             Expert Faculty Staff
            </p>
          </div>

          {/* Stat 4: Success Rate */}
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-white/75">
              99%
            </p>
            <p className="text-lg font-medium text-white/90 mt-1">
             Placement Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
