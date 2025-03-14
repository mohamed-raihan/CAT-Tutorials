import React from "react";

export const Query = () => {
  return (
    <div className="w-[90%] mt-15 md:w-full relative max-w-[1480px] mx-auto bg-gradient-to-tr from-[#0f77b5] to-[#1876a3] overflow-hidden rounded-2xl flex flex-col items-start justify-center px-8 py-10 md:py-16 min-h-[150px] md:min-h-[230px]">
      {/* Animated Diagonal Lines */}
      <div className="absolute w-[50%] h-auto md:-right-[50px] right-[-30px] bottom-[-100%] md:bottom-[-10%] z-0 flex flex-col">
        {[950, 1900, 2850, 3800, 4750, 5700].map((delay, index) => (
          <div key={index} className="w-full bg-[#ffffff] -rotate-45 relative my-4 h-[2px] rounded-full opacity-60">
            <div
              className="animatewi w-[22px] h-full absolute shadow-lg shadow-white left-0 top-0 bg-white"
              style={{ animationDelay: `${delay}ms` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Have a Query in Mind? Reach out to Us
        </h2>
        <div className="flex gap-4">
          <a href="tel:+919235792300">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:opacity-80 transition">
              Call Us Now
            </button>
          </a>
          <a href="mailto:info@cattutorials.com">
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md shadow-md hover:opacity-80 transition">
              Mail Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
