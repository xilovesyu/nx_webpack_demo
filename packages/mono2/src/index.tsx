import { ConfigProvider, theme } from 'antd'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.less'

const Index = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <App />
    </ConfigProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('content'))
