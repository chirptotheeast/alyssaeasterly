// import logo from './logo.svg';
import './App.css';
import "./assets/output.css";

import linelogo from "./images/linelogo.png"

import { Route, Link } from "react-router-dom";
import Project from "./components/Projects.js"
import About from './components/About.js'
import Contact from './components/Contact.js'
import Home from './components/Home.js'
import Design from "./components/Design.js"


function App() {

  return (
    <div>
      <div>
        <nav className="sticky top-0 bg-white">
          <div className="flex items-center justify-between py-2 text-black layout">
            <Link href="/">
              <a className="w-16 font-bold">
                <img
                  className="ml-6"
                  src={linelogo}
                  width={110}
                  height={110}
                  alt="logo"
                />
              </a>
            </Link>

            <ul className="flex items-center justify-between space-x-8">
              {/* <li>
              <Link href="/create-love">
                <SendLoveButton />
              </Link>
            </li> */}
              <li>
                <a className="un hover:text-gray-700" href="#projects">
                  portfolio
                </a>
              </li>
              <li>
                  <a href="#design" className="un hover:text-gray-700">design</a>
              </li>
              <li>
                <a href="#about" className="un hover:text-gray-700">
                  about
                </a>
              </li>
              <li>
                <a href="#contact" className="un hover:text-gray-700">
                  contact
                </a>
              </li>
              <li>
                <a
                  className="mr-4 un hover:text-gray-700"
                  target="_blank"
                  href="https://alyssa-e-easterly.medium.com/"
                >
                  blog
                </a>
              </li>
              <li>
                {" "}
                <button
                  href="/create-love"
                  className="px-5 py-4 mx-4 mt-4 text-sm font-medium text-white uppercase bg-red-300 rounded hover:bg-yellow-200 hover:text-black focus:outline-none focus:bg-indigo-500"
                >
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1udvxHJgT-9CNnbFC8oRnWGlq5lKmZYiIpdh1IQ62PRI/edit?usp=sharing"
                  >
                    resume
                  </a>
                </button>
              </li>
            </ul>
          </div>
          <style jsx>{`
            nav {
              box-shadow: 0px 2px 6px rgba(236, 224, 115, 0.62);
            }
          `}</style>
        </nav>

        <Home />
        <div id="projects">
          <Project />
        </div>
        <div id="design">
          <Design />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact" className="justify-center">
          <Contact />
        </div>
      </div>
      <footer className="sticky bottom-0 bg-white">
      </footer>
    </div>
  );
}

export default App;
