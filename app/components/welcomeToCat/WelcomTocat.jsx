import React from "react";

function WelcomTocat() {
  return (
    <div className="mt-5 p-5 md:p-10">
      <div className="mb-3">
        <h1 className="text-4xl font-bold ">Welcome to CAT Tutorials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:h-85">
        <div className="col-span-1 flex items-center justify-center">
          <iframe
            className="rounded-2xl w-full mt-2 md:w-2xl h-full"
            // width="auto"
            // height="auto"
            src="https://www.youtube.com/embed/8z7y8gOQPC4"
            title="🔥CAT 2023 RESULTS By CAT Tutorials"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl mb-4 text-[#FF6B3D]">About CAT Tutorials <span className="text-white text-sm">by Prep Academy</span></h3>
          <p className="text-justify font-sans">
            Pursuing a career in CAT can open doors to immense professional
            success for any student. However, the journey to cracking the CAT
            Entrance Exam may not be smooth without the right guidance. At CAT
            Tutorials, we are committed to providing students with everything
            they need for flawless exam preparation. Our mentors are IIM alumni,
            equipped with the knowledge and experience to guide students
            perfectly. We aim to make management studies accessible to students
            and dispel any myths associated with the CAT Course and CAT Exam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomTocat;
