import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
function Navbar() {
  return (
    <>
      <div className="navbar bg-gray-950  backdrop-filter backdrop-blur-3xl bg-opacity-50 fixed right-0 left-0 top-0 px-10 z-50">
        <div className="navbar-start ">
          <a
            className=" text-xl cursor-pointer  tooltip tooltip-right font-bold tracking-wide"
            data-tip="Satyendra Narayan Saw"
          >
            SNS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <a href="https://github.com/devSatyendraNarayan/portfolio" target="_blank">
          <button className="btn text-md rounded-box hover:bg-purple-600 hover:text-white">
          <IoCode  className="text-xl "/>
            Code
           
          </button>
          </a>
          
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
