import React from "react";
import { FileText, Download } from "lucide-react";

function ResumeSection() {
  const RESUME_URL = "/VasuBansalresume.pdf";

  return (
    // Added id="Resume" for smooth scrolling from Navbar
    <section
      id="Resume"
      className="w-full flex flex-col items-center py-16 bg-gray-50"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">My Resume</h2>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] md:w-[600px] text-center">
        <FileText className="mx-auto mb-4 text-blue-600" size={48} />
        <p className="text-lg text-gray-600 mb-6">
          You can view or download my resume below:
        </p>

        <div className="flex justify-center gap-4">
          {/* View Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={RESUME_URL}
            download="VasuBansalresume.pdf"
            className="px-6 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
