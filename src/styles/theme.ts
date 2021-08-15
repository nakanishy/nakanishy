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
  success: string
  error: string
  shadowS: string
  shadowM: string
  shadowL: string
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
  theme: '#6c05f2',
  success: '#3dcc99',
  error: '#ec297b',
  shadowS: `0 4px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02)`,
  shadowM: `0 8px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.03)`,
  shadowL: `0 16px 16px rgba(0, 0 ,0, 0.04), 0 16px 32px rgba(0, 0, 0, 0.04)`,
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
  theme: '#6c05f2',
  success: '#3dcc99',
  error: '#ec297b',
  shadowS: `0 4px 4px rgba(255, 255, 255, 0.06), 0 4px 8px rgba(255, 255, 255, 0.04)`,
  shadowM: `0 8px 8px rgba(255, 255, 255, 0.06), 0 8px 16px rgba(255, 255, 255, 0.05)`,
  shadowL: `0 16px 16px rgba(255, 255, 255, 0.06), 0 16px 32px rgba(255, 255, 255, 0.06)`,
}
