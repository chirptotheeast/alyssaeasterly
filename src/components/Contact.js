import React, { Component } from 'react'
import contact from '../images/contact.png'

export default class Contact extends Component {
    render() {
        return (
          <div>
            <section id="contact">
              <div className="layout">
                <div className="flex flex-col items-center">
                  <div className="">
                    <div className="flex flex-col">
                      <img src={contact} className="w-72" />
                      <button className="px-5 py-4 mb-6 mr-6 text-sm font-medium text-black uppercase bg-yellow-200 rounded opacity-70 hover:bg-yellow-300 hover:text-black focus:outline-none focus:bg-blue-200">
                        <a
                          target="_blank"
                          href="mailto: alyssa.e.easterly@gmail.com"
                        >
                          Send Email
                        </a>
                      </button>
                    </div>
              
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}
