import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hi, I’m <b>Vasu Bansal</b>, a passionate developer and tech enthusiast with a strong interest in <b>Full Stack Development</b>, <b>React Native</b>, and <b>Java-based applications</b>. Currently, I am pursuing my <b>B.Tech in Information Technology (2022–2026)</b> from <b>ABES Institute of Technology (ABESIT)</b>. My journey focuses on building scalable and user-friendly applications while continuously improving my problem-solving, development, and leadership skills to create impactful real-world solutions.

        </p>
        <br />

        {/* Education */}
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          B.Tech (Information Technology), ABESIT, 2022–2026 <br />
          SQL with Excel and tableau – CRC ABESIT <br />
          React.js – CRC ABESIT <br />
          Data Analysis – CRC ABESIT
        </span>
        <br />
        <br />

        {/* Skills */}
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Proficient in <b>Java, JavaScript, SQL</b> <br />
Experienced with <b>React.js, React Native, Node.js, Express.js, Spring Boot</b> <br />
Strong foundation in <b>Data Structures & Algorithms, REST APIs, and OOP with Java</b> <br />
Problem-solving mindset with effective leadership, communication, and teamwork
        </span>
        <br />
        <br />

        {/* Experience */}
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
<b>React Developer Intern</b>, Nebulyn — Internship <br />
• Developed front-end components using React.js and worked on UI implementation <br />
• Collaborated with backend teams to integrate REST APIs <br />
• Improved application responsiveness and component reusability

<br /><br />

<b>React Native Developer Intern</b>, RAASA KARTS — 3 Months <br />
• Built cross-platform mobile applications for Android and iOS using React Native and JavaScript <br />
• Developed and deployed a wallet feature used by 1,000+ users with real-time transaction support <br />
• Integrated RESTful APIs and optimized app performance and UI experience
        </span>
        <br />
        <br />

        {/* Achievements */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Certifications
        </h1>
        <span>
          • Completed specialized training in SQL, React.js, and Data Analysis
          at CRC ABESIT <br />
          • Successfully delivered academic and personal projects integrating
          MERN stack and data analytics
        </span>
        <br />
        <br />

        {/* Mission */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
         My mission is to grow as a skilled <b>Full-Stack Developer</b> and{" "}
<b>Software Developer</b> by leveraging modern technologies like React, React Native, and Java-based backend systems. I aim to design scalable, efficient, and user-friendly applications that solve real-world problems and deliver meaningful impact in the digital ecosystem.
        </p>
      </div>
    </div>
  );
}

export default About;
