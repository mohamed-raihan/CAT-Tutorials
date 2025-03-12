"use client"
import React from "react";

const courses = [
  {
    title: "CAT Full Course",
    price: 35000,
    oldPrice: 45500,
    duration: "11 Months",
    badge: "CAT Extended Course",
    image: "/catFullcourse.jpg", // Replace with actual image
  },
  {
    title: "CAT Extended Course",
    price: 25000,
    oldPrice: 32500,
    duration: "7 Months",
    badge: "CAT Extended Course",
    image: "/catExtendedcourse.jpg",
  },
  {
    title: "CAT Course Extended Crash Course",
    price: 15000,
    oldPrice: 19500,
    duration: "4 Months",
    badge: "ONLINE",
    image: "/catExtendedcrashCourse.webp",
  },
  {
    title: "CAT Course Quick Crash Course",
    price: 10000,
    oldPrice: 13000,
    duration: "2 Months",
    badge: "ONLINE",
    image: "/catcrashcourse.jpg",
  },
];

const ExploreCourses = () => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl mb-6">Explore our Courses</h2>
      <div className="mb-6 flex gap-3">
        <button className="px-2 py-2 border rounded-full bg-[#F55D3E]">All Courses</button>
        <button className="px-4 py-2 border rounded-full bg-[#F55D3E] text-white">Online Courses</button>
        <button className="px-4 py-2 border rounded-full bg-[#F55D3E]">Pre-Recorded Courses</button>
        <button className="px-4 py-2 border rounded-full bg-[#F55D3E]">Miscellaneous Courses</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-[#0E1721] shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-sm rounded">{course.badge}</span>
              <span className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 text-sm rounded">
                {course.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg ">{course.title}</h3>
              <p className="text-blue-600 text-xl font-sans font-bold ">₹{course.price} <span className="text-gray-400 line-through text-sm">₹{course.oldPrice}</span></p>
              <div className="flex gap-2 mt-3">
                <button className="bg-white text-[#0E1721] px-4 py-2 rounded">Learn More</button>
                <button className="bg-[#F55D3E] text-white px-4 py-2 rounded">Enroll Now</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 font-sans">Published: Friday, Mar 22, 2024</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCourses;
