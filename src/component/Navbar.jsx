import React from "react";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-300 px-20 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1 ">
          <a
            className="font-bold tracking-wider  text-white text-xl tooltip tooltip-right cursor-pointer select-none"
            data-tip="Satyendra Narayan Saw"
          >
            SNS
           
          </a>
        </div>
       
        <div className="flex-none">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller "
              value="synthwave"
            />

            {/* sun icon */}
            <IoSunny className=" swap-off text-xl cursor-pointer" />
            {/* moon icon */}
            <IoMoonSharp className="swap-on text-xl" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
