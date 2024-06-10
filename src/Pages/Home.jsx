import React from "react";
import resumePDF from '../assets/Satyendra_Narayan_Saw_Resume.pdf';
function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Satyendra_Narayan_Saw_Resume.pdf';
    link.click();
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      
      <div className="text-center flex flex-col items-center gap-y-4">
        <img
          className="mask mask-circle w-80 mt-5 "
          src="https://lh3.googleusercontent.com/pw/AP1GczPJ_Yf502IiK7Ef2eNF_iVWXE3F11PUWbY3eYO7yB2F9hmdVv_Cudm8HY-IqWtp3_VB8wpRy3ORkpByQVk4d_swJM03slK0blsVs-B_4cVEJzTOZefdYzoL619w0sAEBmmBcs5rvAqyX1KsbX2tGKM1=w913-h913-s-no-gm"
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
            className="inline-block rounded-lg cursor-pointer border border-purple-300 px-12 py-3 text-md font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
            
            onClick={handleDownloadCV}
          >
            Download CV
          </a>
<<<<<<< HEAD
         
=======
          <a
            className="inline-block cursor-pointer rounded-lg border border-purple-300 bg-purple-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-purple-500"
            href="#"
          >
            About Me
          </a>
>>>>>>> 2c6cafa3ea1280cc8ca6a38087b61c0cfb2076c3
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
