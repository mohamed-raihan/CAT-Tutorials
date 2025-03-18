"use client";
import { useState } from "react";
import Image from "next/image";

const faculties = [
  {
    name: "KAMAL LOHIA",
    title: "CAT QA, LRDI 99.99%iler",
    experience: "20+ Years of Experience",
    description:
      "Kamal sir is a deeply spiritual and reserved mentor, known for his calm and focused demeanor. Interestingly, he was also Indrajeet sir’s teacher back when he was a student.",
    image: "/images/kamal.jpg",
  },
  {
    name: "RAHUL SHARMA",
    title: "CAT VARC Expert",
    experience: "15+ Years of Experience",
    description:
      "Rahul sir has mentored thousands of students and is well-known for his engaging and insightful teaching style.",
    image: "/images/rahul.jpg",
  },
  {
    name: "INDRAJEET SINGH",
    title: "CAT DILR Specialist",
    experience: "18+ Years of Experience",
    description:
      "Indrajeet sir’s analytical approach to DILR makes complex problems easy for students.",
    image: "/images/indrajeet.jpg",
  },
  {
    name: "ANUJ KUMAR",
    title: "Quant Expert",
    experience: "12+ Years of Experience",
    description:
      "Anuj sir simplifies tough quant topics and ensures students grasp concepts effortlessly.",
    image: "/images/anuj.jpg",
  },
];

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]);

  return (
    <div className="max-w-6xl my-10 mx-auto p-6 bg-[#1a0f0f] text-white rounded-2xl shadow-lg">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-4">Know your Faculties</h2>
      <p className="text-lg text-gray-400 mb-8">
        Know about the top CAT mentors at iQuanta CAT coaching.
      </p>

      <div className="flex flex-col md:flex-row items-center">
        {/* Faculty Details */}
        <div className="md:w-1/2 space-y-2">
          <h3 className="text-3xl font-bold text-[#F55D3E]">{selectedFaculty.name}</h3>
          <p className="text-lg font-semibold">{selectedFaculty.title}</p>
          <p className="text-md text-gray-300">{selectedFaculty.experience}</p>
          <p className="text-gray-400">{selectedFaculty.description}</p>
        </div>

        {/* Faculty Images */}
        <div className="flex flex-wrap gap-4 justify-center md:w-1/2">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setSelectedFaculty(faculty)}
            >
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={128}
                height={128}
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
