import Image from "next/image";

const projects = [
  { id: 1, image: "/commentanaly.png", link: "https://github.com/AnshCinematic/YoutubeAnalyzer", name: "CommentAnaly" },
  { id: 2, image: "/luxora.png", link: "https://github.com/AnshCinematic/Luxora", name: "Luxora" },
  { id: 3, image: "/imageai.png", link: "https://pictora-32zv.onrender.com", name: "AI Image Generator" },
  { id: 4, image: "/Qrcode.png", link: "https://github.com/AnshCinematic/qrcode", name: "QR Code Generator" },
  { id: 5, image: "/password.png", link: "https://github.com/AnshCinematic/Password-Generator", name: "Password Generator" },
  { id: 6, image: "/weather.png", link: "https://github.com/AnshCinematic/WeatherApp", name: "Weather App" },
];

const Projects = () => {
  return (
    <div id="project" className="w-11/12 max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 relative">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-3 text-center text-lg font-semibold text-gray-800">
              {project.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
