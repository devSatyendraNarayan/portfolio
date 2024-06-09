import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { FaHome, FaUser, FaBook, FaToolbox } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./App.css";
import Navbar from "./component/Navbar";
import Social from "./component/Social";


const NavigationLink = ({ to, icon: Icon, activeLink, setActiveLink }) => (
  <li
    className={`${
      activeLink === to ? "active shadow-inner shadow-slate-50" : ""
    } hover:bg-purple-500  btn btn-ghost btn-circle   transition duration-300 ease-in-out`}
  >
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      onSetActive={setActiveLink}
    >
      <a className="tooltip" data-tip={to}>
        {" "}
        <Icon className="text-xl text-white" />
      </a>
    </Link>
  </li>
);

const App = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      scrollSpy.update();
    };
    Events.scrollEvent.register("begin", handleScroll);
    Events.scrollEvent.register("end", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Router>
      <div className="">
        <div className="btm-nav bg-transparent my-5 fixed z-50 ">
          <ul className="flex basis-auto flex-row justify-between items-center px-5 gap-2 bg-purple-500 backdrop-filter backdrop-blur-md bg-opacity-50 rounded-box">
            <NavigationLink
              to="Home"
              icon={FaHome}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavigationLink
              to="About"
              icon={FaUser}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavigationLink
              to="Experience"
              icon={FaBook}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavigationLink
              to="Projects"
              icon={FaToolbox}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
            <NavigationLink
              to="Contact"
              icon={RiMessage3Fill}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </ul>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className=" w-[80vw] mx-auto ">
                <Navbar />
                <div>
                <Social/>
               
                </div>
               
                <Element name="Home">
                  <Home />
                </Element>
                <Element name="About">
                  <About />
                </Element>
                <Element name="Experience">
                  <Experience />
                </Element>
                <Element name="Projects">
                  <Projects />
                </Element>
                <Element name="Contact">
                  <Contact />
                </Element>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
