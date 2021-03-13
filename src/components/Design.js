import React, { Component } from 'react'
import design from '../images/design.png'

export default class Design extends Component {
    render() {
        return (
          <div>
            <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
              <div className="container relative flex px-6 py-16 mx-auto">
                <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                  <h3 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    <img src={design} className="w-80" />
                    <span className="text-5xl sm:text-7xl">Logos</span>
                    <div className="flex ">
                    </div>
                  </h3>
                  <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                    Dimension of reality that makes change possible and
                    understandable. An indefinite and homogeneous environment in
                    which natural events and human existence take place.
                  </p>
                </div>
                <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                  <img
                    src="/images/object/10.png"
                    className="max-w-xs m-auto md:max-w-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
