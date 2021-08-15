import * as React from 'react'

const key = '@colorbase/isDarkMode'

export function useDarkMode(): {
  isDarkMode: boolean
  change: (mode: 'light' | 'dark') => void
} {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue === 'true') {
      return true
    } else if (storageValue === 'false') {
      return false
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const change = React.useCallback((mode: 'light' | 'dark') => {
    if (mode === 'light') {
      localStorage.setItem(key, 'false')
      setIsDarkMode(false)
    } else {
      localStorage.setItem(key, 'true')
      setIsDarkMode(true)
    }
  }, [])
  return { isDarkMode, change }
}
