import React from "react";
import { FaAward, FaCode, FaCity } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center relative bottom-16 mt-10 lg:mt-0 md:mt-0">
      <div className="flex flex-col items-center">
        <p className="text-md">My Intro</p>
        <h1 className="text-3xl text-purple-500">About Me</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 w-4/5">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMdsabikWIHvWP4QSxCvOMb-B67iwR-pyrme_9OFhI99hgYa6jtxtAF-vhGEJXO6w2uAjowKeejerUlj6HNGGByg2YMwaKyd2GDYlJsqRqXiP8ra9OcbCL48ICDOBdtCLFkrvxVkd6pv2OvbHOgl4Vz=w913-h913-s-no-gm"
          className="w-[350px] h-auto"
          alt="programming"
        />

        <div className="flex flex-col items-center text-center space-y-5">
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 items-center">
            <div className="card w-fit bg-base-200 shadow-xl p-4">
              <div className="card-body flex flex-col items-center">
                <FaAward className="text-xl" />
                <h2 className="card-title">Experience</h2>
                <p className="text-sm text-gray-300">Fresher</p>
              </div>
            </div>
            <div className="card w-fit bg-base-200 shadow-xl p-4">
              <div className="card-body flex flex-col items-center">
                <FaCode className="text-xl" />
                <h2 className="card-title">Completed</h2>
                <p className="text-sm text-gray-300">5+ Projects</p>
              </div>
            </div>
            <div className="card w-fit bg-base-200 shadow-xl p-4">
              <div className="card-body flex flex-col items-center">
                <FaCity className="text-xl" />
                <h2 className="card-title">Location</h2>
                <p className="text-sm text-gray-300">Jharkhand, India</p>
              </div>
            </div>
          </div>
          <div className="text-justify">
            Entry-level Front End Developer excited at the prospect of
            developing web applications and developing agile software in a
            professional setting. Focused worker recognized by peers for my
            effective communication and problem-solving skills. Looking to apply
            my understanding of JavaScript and DevOps Engineering at your
            company.
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
