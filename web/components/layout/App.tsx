import '@/global.css'
import { LayoutProps } from 'ssr-types-react'
import React, { FC, useContext, useEffect } from 'react'
import Container from '@/components/Container'
import { Button } from 'antd'

const App: FC<LayoutProps> = (props: LayoutProps) => {
  const { state, dispatch } = useContext(window.STORE_CONTEXT)
  const toggleTheme = () => {
    dispatch({
      type: 'updateContext',
      payload: {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      },
    })
  }

  // const getLayout = (props.children as any).type.getLayout || ((page: React.Component) => page)

  useEffect(() => {
    if (__isBrowser__) {
      const d = document.documentElement
      if (state.theme === 'light') {
        d.classList.remove('dark')
        d.classList.add('light')
      } else {
        d.classList.add('dark')
        d.classList.remove('light')
      }
    }
    return () => {}
  }, [state.theme])

  return (
    <Container>
      {props.children}
      <Button className="bg-gray-300 text-white dark:text-white dark:bg-black rounded w-28" onClick={toggleTheme}>
        Theme
      </Button>
    </Container>
  )
}

export default App
