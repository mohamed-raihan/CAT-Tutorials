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
    <div className="ps-6">
      <div>
        <h4 className="text-3xl">Reviews & <span className="text-[#F55D3E]">Feedbacks</span></h4>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {reviewData.map((data) => (
          <div className="shadow col-span-1 rounded-2xl p-5 bg-[#1f1414]">
            <img
              src={data.image}
              className="rounded-full w-20"
              alt=""
            />
            <h5 className="my-2">{data.name}</h5>
            <button className="border font-sans rounded-full p-1.5 text-xs">
              {data.button}
            </button>
            <div className="my-2">⭐⭐⭐⭐⭐</div>
            <p className="font-sans">{data.review}</p>
            <p className="mb-2 font-sans text-xs">{data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
