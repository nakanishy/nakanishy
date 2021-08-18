export interface Theme {
  isDark: boolean
  fg1: string
  fg2: string
  fg3: string
  bg1: string
  bg2: string
  bg3: string
  border: string
  theme: string
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

export const lightTheme: Theme = {
  isDark: false,
  fg1: '#222222',
  fg2: '#666666',
  fg3: '#7e7e7e',
  bg1: '#ffffff',
  bg2: '#f5f5f5',
  bg3: '#dddddd',
  border: '#ececec',
  theme: '#0EAFF4',
}

export const darkTheme: Theme = {
  isDark: true,
  fg1: '#dddddd',
  fg2: '#aaaaaa',
  fg3: '#888888',
  bg1: '#111111',
  bg2: '#2a2a2a',
  bg3: '#444444',
  border: '#555555',
  theme: '#0EAFF4',
}
