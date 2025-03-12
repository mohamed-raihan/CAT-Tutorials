import React from "react";

function Footer() {
  return (
    <div>
        <div className="flex justify-center items-center">
            <div className="flex rounded-full relative top-20 border bg-[#2B1615] p-12">
                <h3 className="text-4xl">Your One & Only Stop for CAT Preparations</h3>
                <button className="p-3 bg-[#F55D3E] rounded-full ms-5">Enroll now</button>
            </div>
        </div>
        <footer className="bg-[#0B1117] border-t-1 border-white p-8 text-black">
          <div className="container pt-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-white">Sign Up for Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your Email"
                className="mt-2 p-2 w-full border border-amber-50 text-white rounded-md"
              />
              <button className="mt-2 px-4 py-2 bg-[#F55D3E] text-white rounded-md">
                Submit
              </button>
            </div>
            <div>
              <h3 className="text-lg text-white">Quick Links</h3>
              <ul>
                <li className="text-white">Home</li>
                <li className="text-white">About Us</li>
                <li className="text-white">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">Help & Legals</h3>
              <ul>
                <li className="text-white">Terms & Conditions</li>
                <li className="text-white">Refund Policy</li>
                <li className="text-white">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4 text-white">
            &copy; 2024 CAT Tutorials. All rights reserved.
          </div>
        </footer>
    </div>
  );
}

export default Footer;
