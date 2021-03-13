import React, { Component } from 'react'
import about from '../images/about.png'

export default class About extends Component {
    render() {
        return (
          <div>
            <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
              <div className="container relative flex px-6 py-16 mx-auto">
                <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                  <h3 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    <img src={about} className="w-80" />
                    <span className="text-5xl sm:text-7xl">my stack</span>
                    <div className="flex ">
                      <a className="link" data-tippy-content="@twitter_handle">
                        <svg
                          className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Medium</title>
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                          />
                        </svg>
                      </a>
                      <a className="link" data-tippy-content="@twitter_handle">
                        <svg
                          className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Medium</title>
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                          />
                        </svg>
                      </a>
                      <a className="link" data-tippy-content="@twitter_handle">
                        <svg
                          className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Medium</title>
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"
                          />
                        </svg>
                      </a>
                      <a className="link" data-tippy-content="@twitter_handle">
                        <svg
                          className="m-6 text-gray-600 fill-current h-11 hover:text-blue-200"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Medium</title>
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"
                          />
                        </svg>
                      </a>
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