import Image from 'next/image';
import React from 'react'

function Blogs() {

    const blogs = [
        {
          title: "CAT 2025: Exam Pattern & Syllabus, Study Plan, Mock Test and many more",
          description: "Get complete details on CAT 2025, including exam pattern, syllabus, study plans, and mock test strategies.",
          published: "Monday, Jan 27, 2025",
          image: "/cat2025.jpg",
        },
        {
          title: "CAT 2024 Result Out",
          description: "CAT 2024 results are out! Learn how to check your percentile and download the scorecard.",
          published: "Wednesday, Dec 18, 2024",
          image: "/cat2024.jpg",
        },
        {
          title: "XAT Admit Card out | How to Download",
          description: "XAT Admit Card 2024 is now available for download! Learn the step-by-step process.",
          published: "Tuesday, Dec 17, 2024",
          image: "/XAT.jpg",
        },
      ];

  return (
    <div className="px-6  py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid max-w-6xl md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div className="bg-[#0E1721] rounded-lg overflow-hidden hover:shadow shadow-[#F55D3E]">
          <div className="relative w-full h-48">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-serif text-[#F55D3E]">{blog.title}</h2>
            <p className="text-white text-sm mt-2 font-sans">{blog.description}</p>
            <p className="text-gray-300 font-sans text-xs mt-2">Published: {blog.published}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View All Blogs...
        </button>
      </div>
    </div>
  )
}

export default Blogs