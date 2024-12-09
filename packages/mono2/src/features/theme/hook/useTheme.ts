import { useCallback, useContext, useState } from 'react'
import { theme as antdTheme } from 'antd'
import { ThemeContext } from '../context'
export const useTheme = () => {
  const [theme, setTheme] = useState<any>(() => antdTheme.defaultAlgorithm)

  const changeTheme = useCallback((theme: any) => {
    setTheme(() => theme)
  }, [])

  const changeToDark = useCallback(() => {
    changeTheme(antdTheme.darkAlgorithm)
  }, [changeTheme])
  const changeToLight = useCallback(() => {
    changeTheme(antdTheme.defaultAlgorithm)
  }, [changeTheme])

  return {
    theme,
    changeToDark,
    changeToLight
  }
}

export const useThemeContext = () => {
  const { theme, changeToDark, changeToLight } = useContext(ThemeContext)
  return {
    theme,
    changeToDark,
    changeToLight
  }
}
