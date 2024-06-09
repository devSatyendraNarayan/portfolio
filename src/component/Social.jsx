import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Social() {
  return (
    <>
      <div className="fixed bottom-24 z-50 ">
        <ul className="menu bg-base-300 rounded-box w-fit  backdrop-filter backdrop-blur-md bg-opacity-50">
          <li>
            <a
              href="https://www.linkedin.com/in/satyendra-narayan-saw-a9300516b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </li>
          <li>
            <a
             href="https://github.com/devSatyendraNarayan?tab=repositories"
             target="_blank"
             rel="noopener noreferrer">
              <FaGithub className="text-white text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Social;
