import React from "react";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 fixed right-0 left-0 top-0 px-10 z-50">
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
