import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose }) => {
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

  // Close modal when clicking outside
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="bg-[#1A2836] rounded-xl shadow-lg w-2xl relative">
        <div className="col-span-1 flex flex-col ps-3 pe-1 md:p-0">
          
          <div className=" p-8 rounded-lg border border-[#1A2836] shadow-lg">
          <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
        >
          ✖
        </button>
            <div>
              <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
                GET 7 DAYS LIVE SESSION FOR FREE!
              </h3>
              <p className="text-white mb-6">
                Clear your doubts with IIM faculties
              </p>

              {/* Form Fields */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  <div className="grid gap-2 grid-cols-2">
                    <div>
                      <label className="" htmlFor="">NAME</label>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your Full Name"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="w-full col-span-1 bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="">NUMBER</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full col-span-1 bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                      required
                    />
                  </div>

                  {/* <div className="relative">
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
                </div> */}
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
    </div>
  );
};

export default Modal;
