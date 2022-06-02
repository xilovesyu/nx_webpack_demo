import { CustomInput } from '@demo/mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'

const TestApp = () => {
  return (
    <div>
      <CustomInput id="ffff" />
    </div>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('content'))
