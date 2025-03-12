"use client";

import React, { useRef } from "react";

const Benefits = () => {
  const videos = [
    {
      title: "Preparing for the CAT 2025",
      url: "https://www.youtube.com/embed/B06KGIZmQS0?si=2HK50czm7wRPm_KY",
    },
    {
      title: "Best Coaching Centres",
      url: "https://www.youtube.com/embed/iAq61PFSi-Q?si=r8RLZXuGlSmbxf00",
    },
    {
      title: "How to Approach CAT Quantitative Ability",
      url: "https://www.youtube.com/embed/_exkMzynx2s?si=-YDGsxP5h7GNG1Zi",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl text-left text-white">
            <span className="">Helpful</span>{" "}
            <span className="text-[#F55D3E]">Videos</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="w-full h-64">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 flex items-center justify-center">
          <a
            href="https://www.youtube.com/@iCATTutorials"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F55D3E] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#a52a1a] transition-colors"
          >
            View More
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;