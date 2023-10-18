import { ConfigProvider, theme } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.less'
import { keyCloakClient } from './keycloak'

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

keyCloakClient.init().finally(() => {
  ReactDOM.render(<Index />, document.getElementById('content'))
})
