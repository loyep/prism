// import '@/global.css'
import useTheme from '@/hooks/theme'
import Layout from '@/layouts'
import { useTitle } from 'ahooks'
import axios from 'axios'
import React, { FC, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { LayoutProps } from 'ssr-types-react'
import { siteName } from './utils'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'

const App: FC<LayoutProps> = (props: LayoutProps) => {
  const [, toggleTheme] = useTheme()
  const location = useLocation()
  const { state } = useContext(window.STORE_CONTEXT)

  const title = useMemo(() => {
    if (state?.settings?.name && state?.meta?.title) {
      return siteName(state.meta.title, state.settings.name) || 'Kova'
    }
    return 'Kova'
  }, [state?.meta?.title, state?.settings?.name])

  useTitle(title)

  useEffect(() => {
    axios.post(`/api/log`, {})
  }, [location])

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Container>
          {props.children}
          <button className="bg-gray-300 text-white dark:text-white dark:bg-black rounded w-28" onClick={toggleTheme}>
            Theme
          </button>
        </Container>
      </Layout>
    </ChakraProvider>
  )
}

export default App
