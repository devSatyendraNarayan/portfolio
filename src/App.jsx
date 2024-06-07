import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaHome, FaUser, FaBook, FaToolbox } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <div className="btm-nav">
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li>
              <HashLink to="/#home">
                <FaHome className="text-xl" />
              </HashLink>
            </li>
            <li>
              <HashLink to="/#about">
                <FaUser className="text-xl" />
              </HashLink>
            </li>
            <li>
              <HashLink to="/#experience">
                <FaBook className="text-xl" />
              </HashLink>
            </li>
            <li>
              <HashLink to="/#projects">
                <FaToolbox className="text-xl" />
              </HashLink>
            </li>
            <li>
              <HashLink to="/#contact">
                <RiMessage3Fill className="text-xl" />
              </HashLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="min-h-screen flex flex-col">
                  <Home />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
