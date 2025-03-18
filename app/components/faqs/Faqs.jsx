"use client"
import React, { useState } from "react";

const faqs = [
  {
    question: "Which CAT course is best for non-engineers to prepare for CAT 2025?",
    answer: `You can go for iQuanta flagship course CAT 2025 Full Course or the CAT 2025 Pro Batch. 
    These courses provide conceptual videos for non-engineers, for those who are extremely weak in quant. 
    After completion of each topic, there is a marathon that carries questions of CAT 2023. 
    We provide a topic-wise CAT mock test, 50 Questions on each Topic as Study Material, 
    and 10+ Sets of Hardcopy CAT Material as per the Updated Pattern (5000 Questions). 
    The Course has 250+ Recorded Videos and practice sessions after each class along with 24x7 instant doubt support.`,
  },
  {
    question: "Is it necessary to opt for any CAT coaching?",
    answer: `It depends on individual hard work and practice, but having a mentor beside you 
    can help you crack the exam easily. iQuanta is the best when it comes to content, study material, or doubt resolution.`,
  },
  {
    question: "When should I join a CAT course?",
    answer: `Ideally, you should start preparing at least 6-12 months before the exam. 
    Joining a structured CAT course early gives you ample time to practice and revise.`,
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-[#1a0f0f] text-white rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg">
            {/* Question */}
            <button
              className="w-full text-left p-4 flex justify-between items-center text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-[#F55D3E] text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              } text-gray-300`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
