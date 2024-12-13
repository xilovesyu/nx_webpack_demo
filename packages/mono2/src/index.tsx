import {ConfigProvider} from 'antd'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import './index.less'
import {ThemeContext, useTheme} from './features'
const Index = () => {
  const {theme, changeToDark, changeToLight} = useTheme()
  return (
    <ConfigProvider
      theme={{
        algorithm: theme
      }}
    >
      <ThemeContext.Provider value={{theme, changeToDark, changeToLight}}>
        <App />
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

const container = document.getElementById('content')
const root = createRoot(container!)
root.render(<Index />)
