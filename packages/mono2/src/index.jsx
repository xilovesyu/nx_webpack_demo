import  {testPromise, testArray, testArray2} from 'mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'

testPromise.then((value) => {
    console.log('value is ', value)
})
console.log(testArray)
console.log(testArray2)
const TestApp = () => {
    return (
        <div>
        </div>
    )
}
ReactDOM.render(<TestApp />, document.getElementById('content'))