"use client"
import React from "react";

const benefits = [
  {
    title: "Award Winning Faculties",
    description: "Join the best coaching in India for CAT that is run by IIM Alumni",
    icon: "/awardWinning.png", // Replace with actual image if needed
  },
  {
    title: "Exponential Learning",
    description: "Boost the pace of your learning with efficient preparation process prepared by the experts.",
    icon: "/exponentialLearning.png",
  },
  {
    title: "One on One Guidance",
    description: "We believe & practice in providing one on one guidance for the best results.",
    icon: "/oneOnOneguide.png",
  },
  {
    title: "Magical Tips & Tricks",
    description: "Learn alongside the experts who share tips & tricks with you that works like a magic.",
    icon: "magicalTips.png",
  },
];

const BenefitsSection = () => {
  return (
    <section className="px-6 py-12 ">
      <h2 className="text-3xl font-bold">The benefits of choosing <p className="text-[#F55D3E]">CAT Tutorials over others</p></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img className="w-24 h-24 flex items-center justify-center bg-blue-500 text-white text-4xl rounded-full" src={benefit.icon}/>
            <h3 className="text-xl mt-4">{benefit.title}</h3>
            <p className="text-gray-600 font-sans mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;