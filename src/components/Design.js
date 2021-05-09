import React, { Component } from 'react'
import design from '../images/design.png'
import lovelogo from '../images/love4heroes.png'
import sidewalklogo from '../images/sidewalk.png'

export default class Design extends Component {
    render() {
        return (
          <div>
            <section id="design" className="bg-blue-100 bg-opacity-60">
              <div className="layout">
                <div className="relative z-20 flex items-center overflow-hidden ">
                  <div className="container relative flex px-6 py-16 mx-auto">
                    <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                      <h3 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                        <img src={design} className="w-80" />
                        <span className="mb-2 text-5xl sm:text-6xl">Logos</span>
                      </h3>
                      <div className="flex flex-row mt-3 bg-white bg-opacity-50 border-2 rounded shadow-md">
                        <img src={lovelogo} className="w-3/5 ml-2 " alt="love4heroes logo" />
                        <img src={sidewalklogo} className=""/>
                      </div>
                    </div>
                    {/* <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                      <img
                        src="/images/object/10.png"
                        className="max-w-xs m-auto md:max-w-sm"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}
