import React, { Component } from 'react'
import logo from "../images/logo.png";
import profile from "../images/profile.PNG";

export default class Home extends Component {
    render() {
        return (
          <div>
            <main className="flex flex-col items-center justify-center min-h-screen text-blue-300">
              <header class="bg-white dark:bg-gray-800">
                <div className="container px-6 py-16 mx-auto layout">
                  <div className="items-center md:flex">
                    <div className="">
                      <div className="max-w-lg">
                        <div flex flex-row items-center>
                          <img
                            className="w-full h-full max-w-2xl"
                            src={logo}
                            alt="logo"
                          />

                          <h3 className="mt-2 text-xl text-gray-600 dark:text-gray-400">
                            Full Stack Developer with a passion for infusing the
                            world with her creative hacks and design.
                          </h3>
                     
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                      <img
                        className="w-full h-full max-w-2xl"
                        src={profile}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </header>
            </main>
          </div>
        );
    }
}
