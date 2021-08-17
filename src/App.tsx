import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '~/styles/GlobalStyles'
import { darkTheme, lightTheme } from '~/styles/theme'

import { useDarkMode } from './presentation/useDarkMode'
import { useScrollRestoration } from './presentation/useScrollRestoration'

export interface AppContextInterface {
  isDarkMode: boolean
  changeMode: (mode: 'light' | 'dark') => void
}

export const AppContext = React.createContext<AppContextInterface | null>(null)

export const App: React.FC = (props) => {
  const { isDarkMode, change } = useDarkMode()
  useScrollRestoration()
  return (
    <AppContext.Provider value={{ isDarkMode, changeMode: change }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Helmet
          // index.html と一致させる
          defaultTitle="nakanishy"
          titleTemplate="%s - nakanishy"
        />
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
