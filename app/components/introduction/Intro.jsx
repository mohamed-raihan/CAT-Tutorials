"use client";
import React, { useState } from "react";

function Intro() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    college: "",
    program: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
  };

  const handleSubmit = () => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3">
      <div className="col-span-1 px-10 md:px-20 flex flex-col items-center justify-center">
        <div>
          <h6 className="text-4xl font-bold mt-4 text-white">
            Your Mentor <p>And Guide</p> <span className="text-[#FF6B3D]">For Brighter Future</span>
          </h6>
          <p className="mt-5 font-sans text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            impedit maiores nobis veniam quaerat molestiae sed possimus labore,
            voluptates perspiciatis ad quia odit minima ipsam consectetur facere
            molestias adipisci cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea, alias magni reprehenderit doloremque blanditiis voluptatum voluptas totam at praesentium beatae enim molestiae iusto voluptatem amet laborum deleniti modi quis.
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-col ps-3 pe-1 md:p-0 justify-center items-center ">
        <div className="bg- lg:w-[75%]  p-8 rounded-lg border border-[#1A2836] shadow-lg">
          <div>[#0E1721]
            <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
              NEED ASSISTANCE?
            </h3>
            <p className="text-white mb-6">
              Get guidance and clear your doubts
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your Full Name"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                  required
                />
                <input
                  type="text"
                  name="college"
                  placeholder="College Studied"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                  required
                />
                <div className="relative">
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Preferred Online Program
                    </option>
                    <option value="CAT Preparation">CAT Preparation</option>
                    <option value="MBA Entrance">MBA Entrance</option>
                    <option value="GMAT Preparation">GMAT Preparation</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#FF6B3D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md w-full font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
