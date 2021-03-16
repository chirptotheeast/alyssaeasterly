import React, { Component } from 'react'
import projectlogo from '../images/projects-port.png'
import projectplay from "../images/playgroundss.png"
import projectsong from '../images/songlibss.png'
import projectlove from '../images/lovess.png'
import altproj from '../images/altprojectlogo.png'

export default class Projects extends Component {
    render() {
        return (
          <div>
            <section id="projects">
              <div className="layout">
                <div className="p-3 bg-yellow-200 md:mx-auto md:container opacity-70"></div>
                <div>
                  <img className="mt-2 w-72" src={altproj} />
                </div>
                  {/* <div className="flex flex-wrap"> */}
                    <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto my-12 lg:h-screen lg:my-12">
                      {/* <!--Main Col--> */}
                      <div
                        id="profile"
                        className="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0"
                      >
                        <div className="p-4 text-center md:p-12 lg:text-left">
                          {/* <!-- Image for mobile view--> */}
                          <div className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl lg:hidden"></div>

                          <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                            The Playground
                          </h1>
                          <div className="w-4/5 pt-3 mx-auto border-b-2 border-red-400 opacity-25 lg:mx-0"></div>
                          <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                            <svg
                              className="h-4 pr-4 text-yellow-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>{" "}
                            React, Ruby on Rails, Javascript, Tailwind.CSS,
                            PostgreSQL
                          </p>
                          <p className="pt-8 text-sm">
                            Family Entertainment App
                          </p>

                          <div className="pt-12 pb-8">
                            <button className="px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900 focus:outline-none">
                              Demo
                            </button>
                          </div>

                          {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
                        </div>
                      </div>

                      {/* <!--Img Col--> */}
                      <div className="w-full lg:w-2/5">
                        {/* <!-- Big profile image for side bar (desktop) --> */}
                        <img
                          src={projectplay}
                          className="hidden rounded-none shadow-2xl lg:rounded-lg lg:block"
                        />
                        {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto my-32 lg:h-screen lg:my-0">
                      {/* <!--Main Col--> */}
                      <div
                        id="profile"
                        className="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0"
                      >
                        <div className="p-4 text-center md:p-12 lg:text-left">
                          {/* <!-- Image for mobile view--> */}
                          <div className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl lg:hidden"></div>

                          <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                            Songlibs
                          </h1>
                          <div className="w-4/5 pt-3 mx-auto border-b-2 border-red-400 opacity-25 lg:mx-0"></div>
                          <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                            <svg
                              className="h-4 pr-4 text-yellow-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>{" "}
                            React, Ruby on Rails, Javascript, PostgreSQL
                          </p>
                          <p className="pt-8 text-sm">Songwriting Game App</p>

                          <div className="pt-12 pb-8">
                            <button className="px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900 focus:outline-none">
                              Demo
                            </button>
                          </div>

                          {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
                        </div>
                      </div>

                      {/* <!--Img Col--> */}
                      <div className="w-full lg:w-2/5">
                        {/* <!-- Big profile image for side bar (desktop) --> */}
                        <img
                          src={projectsong}
                          className="hidden rounded-none shadow-2xl lg:rounded-lg lg:block"
                        />
                        {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto my-32 lg:h-screen lg:my-0">
                      {/* <!--Main Col--> */}
                      <div
                        id="profile"
                        className="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0"
                      >
                        <div className="p-4 text-center md:p-12 lg:text-left">
                          {/* <!-- Image for mobile view--> */}
                          <div className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded shadow-xl lg:hidden"></div>

                          <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                            love4heroes
                          </h1>
                          <div className="w-4/5 pt-3 mx-auto border-b-2 border-red-400 opacity-25 lg:mx-0"></div>
                          <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                            <svg
                              className="h-4 pr-4 text-yellow-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>{" "}
                            React, Next.js, Firebase.db, Javascript,
                            Tailwind.css
                          </p>
                          <p className="pt-8 text-sm">
                            App to send warm messages to our Frontline Workers.{" "}
                          </p>

                          <div className="pt-12 pb-8">
                            <button className="px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900 focus:outline-none">
                              Demo
                            </button>
                          </div>

                          {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
                        </div>
                      </div>

                      {/* <!--Img Col--> */}
                      <div className="w-full lg:w-2/5">
                        {/* <!-- Big profile image for side bar (desktop) --> */}
                        <img
                          src={projectlove}
                          className="hidden rounded-none shadow-2xl lg:rounded-lg lg:block"
                        />
                      </div>
                    </div>
                  {/* </div> */}
              </div>
            </section>
          </div>
        );
    
}
}
