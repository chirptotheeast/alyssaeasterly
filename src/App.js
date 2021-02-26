// import logo from './logo.svg';
import './App.css';
import "./assets/output.css";
import logo from "./images/logo.png"
import linelogo from "./images/linelogo.png"
import profile from "./images/profile.PNG"
import { Route, Link } from "react-router-dom";


function App() {

  return (
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
              <Link>
                <a className="un hover:text-gray-700">portfolio</a>
              </Link>
            </li>
            <li>
              <Link>
                <a className="un hover:text-gray-700">design</a>
              </Link>
            </li>
            <li>
              <Link>
                <a className="un hover:text-gray-700">about </a>
              </Link>
            </li>
            <li>
              <Link>
                <a className="un hover:text-gray-700">contact</a>
              </Link>
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

      <main className="flex flex-col items-center justify-center min-h-screen text-green-400">
        <header class="bg-white dark:bg-gray-800">
          <div className="container px-6 py-16 mx-auto layout">
            <div className="items-center md:flex">
              <div className="w-full md:w-1/2">
                <div className="max-w-lg">
                  <img
                    className="w-full h-full max-w-2xl"
                    src={logo}
                    alt="logo"
                  />
                  <h3 className="mt-2 text-gray-600 dark:text-gray-400">
                    Full Stack Developer with a passion for infusing the world
                    with her creative hacks and design.
                  </h3>
                  <div className="flex pt-4 space-x-4">
                    <button
                      href="#messages"
                      className="px-5 py-4 mx-4 mt-4 text-sm font-medium text-white uppercase bg-red-300 rounded hover:bg-blue-200 focus:outline-none focus:bg-indigo-500"
                    >
                      CONTACT ME
                    </button>
                   
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                <img
                  className="w-full h-full max-w-2xl"
                  src={profile}
                  alt="profile"
                />
                {/* <button
                  className="flex flex-col items-center justify-center p-4 mt-6 text-sm font-medium text-black border border-black rounded-md focus:outline-none"
                  onClick={() => setCount(count + 1)}
                >
                  Like for Frontliners
                  <img src="/images/logo/heart-pink.svg" />
                  {count}
                </button> */}
              </div>
            </div>
          </div>
        </header>
      </main>
      <section id="portfolio" className="grid gap-10 md:grid-cols-3 layout">
        <h1>My Projects</h1>
      </section>
    </div>
  );
}

export default App;
