"use client";
import Image from "next/image";

const toppers = [
  {
    percentile: "99.83",
    name: "Gursimran Ahuja",
    institute: "IIM Ahmedabad",
    image: "/images/gursimran.jpg",
    testimonial:
      "Being active in your online CAT course and learning from other students’ doubts or approach can help you avoid mistakes and enable you to solve questions faster, and I have iQuanta to thank for providing me that platform...",
  },
  {
    percentile: "99.98",
    name: "Shikhar Sachdeva",
    institute: "IIM Ahmedabad",
    image: "/images/shikhar.jpg",
    testimonial:
      "How can I even begin to thank the mentor Indrajeet Singh, who was there at each step of the journey to guide me, and to show me the right direction. It’s been a wonderful journey so far...",
  },
  {
    percentile: "99.76",
    name: "Sahil Aggarwal",
    institute: "IIM Ahmedabad",
    image: "/images/sahil.jpg",
    testimonial:
      "I found this to be the best material for quant preparation for CAT, which ideally suited my preparation style. Thank you for the course sir, keep helping and motivating the students...",
  },
  {
    percentile: "99.06",
    name: "Biswanath Chakraborty",
    institute: "IIM Bangalore",
    image: "/images/biswanath.jpg",
    testimonial:
      "The journey started with CAT preparation 2 years back, with me practicing with stalwarts from the previous batch. It has been an amazing journey with iQuanta...",
  },
];

export default function Toppers() {
  return (
    <section className="bg-[#0f0d0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl mb-4">
          Read Toppers' Success Stories
        </h2>
        <p className="text-lg text-gray-400">
          Out of many 99%ilers and Top IIM Converts from iQuanta, few have
          penned down their success stories.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {toppers.map((topper, index) => (
          <div
            key={index}
            className="bg-[#1a0f0f] rounded-xl shadow-lg relative"
          >
            <div className="p-3">
              <div className="absolute right-5 w-12 h-12 border-2 border-white rounded-full overflow-hidden">
                <Image
                  src={topper.image}
                  alt={topper.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
  
              <h3 className="text-xl text-[#F55D3E]">
                CAT Percentile
              </h3>
              <p className="text-2xl">{topper.percentile}</p>
            </div>

            <div className="border-3 border-[#3e3030] rounded-2xl p-1.5">
              <div className="mt-3 h-28 overflow-y-scroll p-1.5 scrollbar-hide">
                <p className="text-gray-300 font-sans">{topper.testimonial}</p>
              </div>
  
              <a href="#" className="text-[#F55D3E] font-semibold mt-3 block">
                Read full story →
              </a>
  
              <h4 className="text-lg mt-4">{topper.name}</h4>
              <p className="text-gray-400 text-sm">{topper.institute}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
