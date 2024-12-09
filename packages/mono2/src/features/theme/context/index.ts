import React from 'react'
import { theme as antdTheme } from 'antd'
export interface ThemeContextProps {
  theme: any
  changeToDark: () => void
  changeToLight: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: antdTheme.defaultAlgorithm,
  changeToDark: () => {},
  changeToLight: () => {}
})
