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
        {props.children}
        <button className="bg-gray-300 text-white dark:text-white dark:bg-black rounded w-28" onClick={toggleTheme}>
          Theme
        </button>
      </Container>
    </Layout>
  )
}

export default App
