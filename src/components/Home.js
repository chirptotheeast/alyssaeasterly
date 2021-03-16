import React, { Component } from 'react'
import logo from "../images/logo.png";
import altprofile from "../images/altprofile.png"

export default class Home extends Component {
    render() {
        return (
          <div>
            <section id="hero">
              <div className="layout">
              <main className="flex flex-col items-center justify-center min-h-screen text-blue-300">
                <header class="bg-white dark:bg-gray-800">
                  <div className="container px-6 py-12 mx-auto layout">
                    <div className="items-center md:flex">
                      <div className="">
                        <div className="max-w-lg">
                          <div flex flex-row items-center>
                            <img
                              className="w-full h-full max-w-2xl"
                              src={altprofile}
                              alt="logo"
                            />

                            <h1 className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                              Full Stack Developer with a passion for infusing
                              the world with her creative hacks and design.
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </main>
              </div>
            </section>
          </div>
        );
    }
}
