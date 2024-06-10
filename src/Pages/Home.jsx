import React from "react";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center flex flex-col items-center gap-y-4">
        <img
          className="mask mask-circle w-1/3"
          src="https://photos.google.com/photo/AF1QipN5AukVdpnzucUcYFov8lXr6X_9pBH6NimVd1IF"
          alt="My Image"
        />
        <div>
          <p className="text-lg">Hello, I&apos;m</p>
          <h1 className="text-3xl font-semibold tracking-wider">
            Satyendra Narayan Saw
          </h1>
          <p className="text-lg">Frontend Developer</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            className="inline-block rounded-lg border border-purple-300 px-12 py-3 text-md font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
            href="#"
          >
            Download CV
          </a>
          <a
            className="inline-block rounded-lg border border-purple-300 bg-purple-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-purple-500"
            href="#"
          >
            About Me
          </a>
        </div>
        <div className="flex items-center">
          <span className="bg-green-600 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
            Available for Hire
          </span>
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
