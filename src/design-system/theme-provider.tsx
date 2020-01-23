import React from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'
import baseTheme from './theme/base'

interface ThemeProviderProps {
  chilren: React.ReactNode
}

function ThemeProvider({ chilren }: ThemeProviderProps) {
  return <BaseThemeProvider theme={baseTheme}>{chilren}</BaseThemeProvider>
}

export default ThemeProvider
