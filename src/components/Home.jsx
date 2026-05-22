import React from "react";

import pic from "../../public/frontfoto.jpeg"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  const email = "Vasubansal025@gmail.com";
  const subject = "Hello Vasu"; // optional
  const body = "I would like to contact you."; // optional
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 md:pr-8">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
             "Hi, I’m Vasu Bansal — a final-year B.Tech student at ABES Institute of Technology (ABESIT) with a strong foundation in Full Stack Development, React Native, and Java programming. I enjoy building scalable, user-friendly web and mobile applications while continuously exploring modern technologies and development practices. Passionate about problem-solving and innovation, I combine technical expertise with leadership and collaboration skills to create impactful real-world digital solutions."
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vasu-bansal-527311250/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-none hover:bg-blue-600 transition-all"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Vasubansal25/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-none hover:bg-gray-700 transition-all"
                    >
                      <FaGithub size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-none hover:bg-red-500 transition-all"
                      title="Send me an email via Gmail"
                    >
                      <MdEmail size={24} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 order-1 md:order-2">
            <img
              src={pic}
              className="w-40 h-40 md:w-[600px] md:h-[600px] object-cover shadow-xl ring-4 ring-white"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
