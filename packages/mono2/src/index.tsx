import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.less'

const TestApp = () => {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('content'))
