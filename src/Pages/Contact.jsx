import React from "react";
import { MdEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp,IoMdCall  } from "react-icons/io";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center">
        <p className="text-md">Get in touch</p>
        <h1 className="text-3xl text-purple-500">Contact Me</h1>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row items-center mt-5">
        <div className="card w-full  bg-base-100 shadow-xl">
          <div className="card-body flex items-center">
            <h2 className="flex flex-col items-center">
              <MdEmail className="text-2xl" />
              <span className="text-md text-gray-200">
                satyendranarayansaw01@gmail.com
              </span>
            </h2>
            <p className="text-lg">Email</p>
            <a
              href="mailto:satyendranarayansaw01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:scale-105"
            >
              Write Me <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="card w-full  bg-base-100 shadow-xl">
          <div className="card-body flex items-center">
            <h2 className="flex flex-col items-center">
              <IoMdCall className="text-2xl" />
              <span className="text-md text-gray-200">
                +91 930-4085-461
              </span>
            </h2>
            <p className="text-lg">Via call</p>
            <a
              href={`tel:+919304085461`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:scale-105"
            >
              Call Me <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body flex items-center">
            <h2 className="flex flex-col items-center">
              <FaLinkedin className="text-2xl" />
              <span className="text-md text-gray-200">
                Satyendra Narayan saw
              </span>
            </h2>
            <p className="text-lg">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/satyendra-narayan-saw-a9300516b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:scale-105"
            >
              Write Me <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body flex items-center">
            <h2 className="flex flex-col items-center">
              <IoLogoWhatsapp className="text-2xl" />
              <span className="text-md text-gray-200">
                Satyendra Narayan saw
              </span>
            </h2>
            <p className="text-lg">Whatsapp</p>
            <a
              href="https://wa.me/919304085461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:scale-105"
            >
              Write Me <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <footer className="footer footer-center p-4">
          <aside>
            <div className="flex items-center">
              <span className="bg-green-600 text-white text-sm font-semibold px-2.5 py-0.5 rounded mr-2">
                Available for Hire
              </span>
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
            </div>
          </aside>
        </footer>
        <div className="h-20 w-full"></div>
      </div>
    </div>
  );
}

export default Contact;
