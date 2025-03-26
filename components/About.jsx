import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center">
      {/* Fixed "About Me" Header */}

      {/* Main Content */}
      <div className="w-11/12 max-w-3xl mx-auto h-screen flex flex-col justify-center items-center text-center gap-6">
        {/* About Me Heading (Optional for extra emphasis) */}
        <h1 className="text-5xl font-bold text-black">
          About Me
        </h1>

        {/* Description with darker contrast */}
        <p className="text-lg text-gray-600leading-relaxed font-medium">
          👨‍💻 <span className="font-semibold">Software Developer | Tech Enthusiast</span>
          <br />
          I am a <span className="font-semibold">Computer Science student</span> passionate about 
          software development, UI/UX, and problem solving. With experience in 
          <span className="text-blue-600 font-medium"> full-stack web development, product building </span> and 
          <span className="text-blue-600 font-medium"> backend systems</span>, I enjoy building 
          scalable solutions that enhance efficiency and user experience.
          <br />
          I have worked on various projects in <span className="font-semibold">web applications</span>, alongside industry exposure through internships. Additionally, 
          I have contributed to <span className="font-semibold">research and development</span>, co-authoring 
          a publication in <span className="text-blue-600 font-medium">IEEE Xplore</span>. I am always eager 
          to explore new technologies, solve challenging problems, and create impactful solutions.
        </p>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
