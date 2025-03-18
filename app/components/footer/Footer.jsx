import React from "react";

function Footer() {
  return (
    <div className="mt-15">
      {/* CTA Section */}
      <div className="flex justify-center items-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left rounded-2xl px-6 md:px-16 py-8 w-full max-w-5xl bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-2xl">
          <h3 className="text-2xl md:text-3xl text-[#0B1117] font-semibold">
            Your One & Only Stop for CAT Preparations
          </h3>
          <button className="mt-4 md:mt-0 p-3 bg-[#0B1117] shadow rounded-full text-white">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0E1721] border-t border-white px-6 md:px-12 pt-25 text-black -my-15">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold text-lg text-white">Sign Up for Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your Email"
              className="mt-2 p-2 w-full border border-gray-300 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E]"
            />
            <button className="mt-2 px-4 py-2 bg-[#F55D3E] text-white rounded-md w-full sm:w-auto">
              Submit
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
              <li className="text-white hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="text-white hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div>
            <h3 className="text-lg font-bold text-white">Help & Legals</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-white hover:text-gray-300 cursor-pointer">Terms & Conditions</li>
              <li className="text-white hover:text-gray-300 cursor-pointer">Refund Policy</li>
              <li className="text-white hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm text-center text-white">
          &copy; 2024 CAT Tutorials. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
