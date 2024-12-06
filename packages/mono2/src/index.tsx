import { ConfigProvider, theme } from 'antd'
import React from 'react'
import { createRoot } from 'react-dom/client'
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

const container = document.getElementById('content')
const root = createRoot(container!)
root.render(<Index />)
