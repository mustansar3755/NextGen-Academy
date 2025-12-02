// Add your hero image in assets

import assets from "../assets/assets";
import Button from "./Button";

function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.HeroImg})` }}
    >
      {/* Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Your Future With
          <span className="text-blue-700"> NextGen Academy</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl">
          We provide quality education for students with clear explanations,
          easy notes, and concept-based learning to help you score higher and
          build a strong academic foundation.
        </p>

        {/* <button className="mt-6 bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg
         hover:bg-blue-600 cursor-pointer transition">
          Explore Courses
        </button> */}
        <div className=" mt-8">
          <Button title="Explore More" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
