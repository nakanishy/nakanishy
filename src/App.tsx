import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '~/styles/GlobalStyles'
import { darkTheme, lightTheme } from '~/styles/theme'

import { AppContext, AppContextProvider } from './presentation/AppContext'
import { SidebarContextProvider } from './presentation/SidebarContext'

export const App: React.FC = (props) => {
  React.useEffect(() => {
    const baseStyle = `font-size: 20px;font-weight: bold;line-height: 1.6;`
    console.log(
      '%cCrafted by @nakanishy\n%chttps://nakanishy.com',
      baseStyle,
      ''
    )
  }, [])
  return (
    <AppContextProvider>
      <SidebarContextProvider>
        <AppContext.Consumer>
          {(value) => {
            const theme = value?.isDarkMode ? darkTheme : lightTheme
            return (
              <ThemeProvider theme={theme}>
                <Helmet
                  // index.html と一致させる
                  defaultTitle="Colorbase - クリエイターのための All-in-One カラーツール"
                  titleTemplate="%s - Colorbase"
                />
                <GlobalStyles />
                {props.children}
              </ThemeProvider>
            )
          }}
        </AppContext.Consumer>
      </SidebarContextProvider>
    </AppContextProvider>
  )
}
