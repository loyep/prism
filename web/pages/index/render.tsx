import React, { FC } from 'react'

interface IndexProps {
  title?: string
}

const Index: FC<IndexProps> = () => {
  return (
    <div>
      {/*<header className="w-full px-4 pt-4">*/}
      {/*  <nav className="flex items-center justify-between flex-wrap">*/}
      {/*    <a href="/" className="flex items-center text-gray-700 font-bold">*/}
      {/*      Kova*/}
      {/*    </a>*/}

      {/*    <input id="nav-toggle" type="checkbox" className="hidden" />*/}
      {/*    <label*/}
      {/*      id="show-button"*/}
      {/*      htmlFor="nav-toggle"*/}
      {/*      className="flex items-center block sm:hidden text-gray-500 hover:text-blue-500"*/}
      {/*    >*/}
      {/*      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
      {/*        <title>Menu Open</title>*/}
      {/*        <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />*/}
      {/*      </svg>*/}
      {/*    </label>*/}
      {/*    <label*/}
      {/*      id="hide-button"*/}
      {/*      htmlFor="nav-toggle"*/}
      {/*      className="flex items-center hidden text-gray-700 hover:text-blue-500"*/}
      {/*    >*/}
      {/*      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
      {/*        <title>Menu Close</title>*/}
      {/*        <polygon*/}
      {/*          points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"*/}
      {/*          transform="rotate(45 10 10)"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </label>*/}

      {/*    <ul id="nav-menu" className="sm:flex w-full sm:w-auto hidden sm:block mt-2 sm:mt-0 sm:space-x-2">*/}
      {/*      /about*/}
      {/*      <li>*/}
      {/*        <a href="#" className="text-gray-500 hover:text-blue-400">*/}
      {/*          About*/}
      {/*        </a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*</header>*/}

      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2">
              <i className='em em-grinning'/> Kova
            </span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-900">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 text-black dark:text-white">test</div>
        </div>
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

export default Index
