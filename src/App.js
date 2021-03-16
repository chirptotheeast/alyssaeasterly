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
              {/* <li>
                  <a href="#design" className="un hover:text-gray-700">design</a>
              </li> */}
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
                  className=" un hover:text-gray-700"
                  target="_blank"
                  href="https://alyssa-e-easterly.medium.com/"
                >
                  blog
                </a>
              </li>
              <li>
                <button className="px-5 py-4 mr-6 text-sm font-medium text-black uppercase bg-yellow-200 rounded opacity-70 hover:bg-yellow-300 hover:text-black focus:outline-none focus:bg-blue-200">
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
        {/* <div id="design">
          <Design />
        </div> */}
        <div id="about">
          <About />
        </div>
        <div id="contact" className="justify-center">
          <Contact />
        </div>
      </div>

      <footer id="footer" className="bg-yellow-100 ">
        <div className="flex-row layout">
          {/* <div className="flex flex-row "> */}
            {/* <div className="flex "> */}
              <a className="link" href="#" data-tippy-content="@github_handle">
                <svg
                  className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <svg
                  className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Medium</title>
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <svg
                  className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Linkedin</title>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            {/* </div> */}
          {/* </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
