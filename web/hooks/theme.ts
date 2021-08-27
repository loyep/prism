import { useContext, useEffect, useMemo } from 'react'

export default function useTheme() {
  const { state, dispatch } = useContext(window.STORE_CONTEXT)

  const toggle = (theme?: 'light' | 'dark') => {
    dispatch({
      type: 'updateContext',
      payload: {
        theme: theme ?? (state.theme === 'dark' ? 'light' : 'dark'),
      },
    })
  }

  const theme = useMemo(() => state.theme ?? 'light', [state.theme])

  useEffect(() => {
    if (__isBrowser__) {
      const d = document.documentElement
      if (theme === 'light') {
        d.classList.contains('dark') && d.classList.remove('dark')
        d.classList.add('light')
      } else {
        d.classList.contains('light') && d.classList.remove('light')
        d.classList.add('dark')
      }
    }
  }, [theme])
  return [theme, toggle]
}
