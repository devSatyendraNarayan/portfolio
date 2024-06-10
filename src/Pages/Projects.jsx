import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "AI Grammar Correct",
      imageUrl: "/src/assets/AI-Grammer-correct.jpeg",
      demoLink: "https://gramarly.vercel.app/",
      codeLink:
        "https://github.com/devSatyendraNarayan/Object-detection-System-",

      technologies: ["Gemini API", "React JS"],
    },
    {
      id: 2,
      title: "Object Detection System",
      imageUrl: "/src/assets/Object-detection-img.jpeg",
      demoLink: "https://object-detection-system.vercel.app/",
      codeLink:
        "https://github.com/devSatyendraNarayan/Object-detection-System-",
      technologies: ["Tensorflow JS", "React JS"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-md">My Portfolio</p>
        <h1 className="text-3xl text-purple-500">Projects</h1>
      </div>
      <div className="flex lg:flex-row w-full mt-5 flex-col mb-10 lg:mb-0 items-center justify-center lg:space-x-5 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="card w-96 bg-base-100 shadow-xl relative mb-5"
          >
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-purple-500 rounded-full absolute right-2 text-xs top-2 flex items-center justify-center cursor-pointer"
              >
                View Code
              </a>
            )}
            <figure className="px-10 pt-10">
              <img
                src={project.imageUrl}
                alt={`${project.title} project`}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-start text-center">
              <h2 className="card-title">{project.title}</h2>

              <div className="w-full">
                <div className="card-actions flex items-center justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300"
                  >
                    Demo<FaArrowRightLong />
                  </a>
                  <div className="space-x-2">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
