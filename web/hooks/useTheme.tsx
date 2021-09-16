import { inject } from 'vue'
export const THEME_KEY = Symbol.for('THEME')
import { provide, defineComponent, reactive, readonly } from 'vue'

interface ThemeOptions {
  mode: 'light' | 'dark'
}

export const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  setup(_, { slots }) {
    const localState = reactive<ThemeOptions>({
      mode: 'light',
    })
    const state = readonly(localState)

    const store = {
      state,
      dispatch(theme: Partial<ThemeOptions>) {
        Object.assign(localState, theme)
      },
    }
    provide(THEME_KEY, store)

    return () => <div>{slots.default?.()}</div>
  },
})

export function useTheme(): {
  state: Readonly<ThemeOptions>
  action: (theme: Partial<ThemeOptions>) => Promise<ThemeOptions>
} {
  return inject<any>(THEME_KEY, { state: {}, action: () => {} })
}
