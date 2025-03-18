import React from "react";

function Review() {
  const reviewData = [
    {
      image: "/Aarushi.jpg",
      name: "Aarushi Mehrotra",
      button: "IIM Kozhikode",
      review:
        "I found CAT tutorials extremely helpful. It exceeded my expectations in every way.",
      date: "2023-09-19",
    },
    {
      image: "/Shubh.jpg",
      name: "Shubh SP Jain",
      button: "IIM Kozhikode",
      review: "The CAT coaching here is great value for the price.",
      date: "2023-09-18",
    },
    {
      image: "/Sourav.jpg",
      name: "Sourav MDI",
      button: "IIM Lucknow",
      review:
        "Best CAT Coaching out there for CAT Students looking for experts guidance!",
      date: "2023-09-17",
    },
    {
      image: "/Prashant.jpg",
      name: "Prashant",
      button: "IIM Kozhikode",
      review: "Absolutely love CAT tutorials! The quality is outstanding.",
      date: "2023-09-16",
    },
    {
      image: "/Rimzhim.jpg",
      name: "Rimzhim Mohanty",
      button: "IIM Kozhikode",
      review: "Great experience with CAT Coaching. Helped me a lot!",
      date: "2023-06-01",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-6">
      {/* Title */}
      <div>
        <h4 className="text-2xl md:text-3xl font-semibold">
          Reviews & <span className="text-[#F55D3E]">Feedbacks</span>
        </h4>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {reviewData.map((data, index) => (
          <div key={index} className="shadow-lg rounded-2xl p-6 bg-[#1f1414] text-white">
            {/* Profile Image */}
            <div className="flex items-center gap-4">
              <img src={data.image} className="rounded-full w-16 h-16 object-cover" alt={data.name} />
              <div>
                <h5 className="text-lg font-semibold">{data.name}</h5>
                <button className="border rounded-full px-3 py-1 text-xs bg-[#F55D3E] text-white">
                  {data.button}
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="my-2 text-yellow-400">⭐⭐⭐⭐⭐</div>

            {/* Review Text */}
            <p className="text-sm mt-2">{data.review}</p>

            {/* Date */}
            <p className="mt-2 text-xs text-gray-400">{data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
