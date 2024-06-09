import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Basic" },
    { name: "Bootstrap", level: "Basic" },
    { name: "React", level: "Intermediate" },
    { name: "Next JS", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Basic" },
    { name: "Firebase", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Mongo DB", level: "Basic" },
    { name: "Python", level: "Basic" },
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="card  bg-base-200 shadow-xl">
      <div className="card-body flex flex-col gap-5 items-center">
        <h2 className="card-title text-purple-400 ">{title}</h2>
        <section className="grid grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="flex items-center text-md">
                <span className="mr-2">
                  <BsFillPatchCheckFill className="text-purple-400" />
                </span>
                {skill.name}
              </h3>
              <p className="text-gray-500 text-sm ml-6">{skill.level}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-16 w-fit">
      <div className="flex flex-col items-center  mb-8">
        <p className="text-md ">My Skills</p>
        <h1 className="text-3xl text-purple-500 ">My Experiences</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
      </div>
    </div>
  );
};

export default Experience;
