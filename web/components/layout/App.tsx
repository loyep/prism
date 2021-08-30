import '@/global.css'
import { LayoutProps } from 'ssr-types-react'
import React, { FC, useEffect } from 'react'
import Container from '@/components/Container'
import useTheme from '@/hooks/theme'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios'
import Layout from '@/layouts'

const App: FC<LayoutProps> = (props: LayoutProps) => {
  const [, toggleTheme] = useTheme()
  const location = useLocation()

  useEffect(() => {
    axios.post(`/api/log`, {})
  }, [location])

  return (
    <Layout>
      <Container>
        <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <NavLink
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blueGray-700"
                to="/"
              >
                Kova
              </NavLink>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="lg:flex flex-grow items-center hidden" id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <NavLink
                    to="/category/test"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-blueGray-400"></i>
                    <span className="ml-2">Category</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/article/test_001"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-blueGray-400"></i>
                    <span className="ml-2">Article</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                    to="/tag/test_002"
                  >
                    <i className="far fa-file-alt text-lg leading-lg text-blueGray-400"></i>
                    <span className="ml-2">Tag</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                    to="/user/zack"
                  >
                    <i className="fas fa-arrow-alt-circle-down text-lg leading-lg text-blueGray-400"></i>
                    <span className="ml-2">User</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/article/test_002"
                    className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-blueGray-500"
                  >
                    <i className="fab fa-sketch text-lg leading-lg text-blueGray-400"></i>
                    <span className="ml-2">Article2</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {props.children}
        <button className="bg-gray-300 text-white dark:text-white dark:bg-black rounded w-28" onClick={toggleTheme}>
          Theme
        </button>
      </Container>
    </Layout>
  )
}

export default App
