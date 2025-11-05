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
          👨‍💻 <span className="font-semibold">Software Developer Engineer | Bengaluru</span>
          <br />
          I am a <span className="font-semibold">Software Development Engineer in Test (SDET)</span> at <span className="font-semibold">Hyperbots</span>, a growing startup based in Bengaluru, and a <span className="font-semibold">final-year B.Tech Computer Science student</span> passionate about building efficient and reliable software systems.
          <br />
          With hands-on experience in <span className="text-blue-600 font-medium">web development, automation, and backend engineering</span>, I focus on creating <span className="text-blue-600 font-medium">scalable and high-performance solutions</span> that enhance product quality and user experience.
          <br />
          I have worked on diverse <span className="font-semibold">web application projects</span> and contributed to <span className="font-semibold">research and development</span>, co-authoring a publication in <span className="text-blue-600 font-medium">IEEE Xplore</span>.
          Driven by curiosity and a problem-solving mindset, I am always eager to explore new technologies, improve system reliability, and build impactful digital products.
        </p>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
