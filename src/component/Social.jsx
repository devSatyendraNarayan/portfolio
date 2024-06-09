import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Social() {
  return (
    <>
      <div className="fixed bottom-24 z-50 ">
        <ul className="menu bg-base-300 rounded-box w-fit  backdrop-filter backdrop-blur-md bg-opacity-50">
          <li>
            <a>
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </li>
          <li>
            <a>
              <FaGithub className="text-white text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Social;
