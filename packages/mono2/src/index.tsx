import  {testPromise, testArray, testArray2, CustomInput} from '@demo/mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'

testPromise.then((value) => {
    console.log('value is:', value)
})
console.log(testArray)
console.log(testArray2)
const TestApp = () => {
    return (
        <div>
            <CustomInput aria-label={'just test input'}/>
        </div>
    )
}

ReactDOM.render(<TestApp />, document.getElementById('content'))
