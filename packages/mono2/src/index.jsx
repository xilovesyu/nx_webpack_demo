import {helloworld, one, CustomButton, CustomInput, testPromise, testArray, testArray2} from 'mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'

console.log(helloworld())
console.log(one.run())
testPromise.then((value) => {
    console.log('value is ', value)
})
console.log(testArray)
console.log(testArray2)
const TestApp = () => {
    return (
        <div>
            <CustomButton>
                <button>Click me</button>
            </CustomButton>
            <CustomInput>
                <input type={'text'} />
            </CustomInput>
        </div>
    )
}
ReactDOM.render(<TestApp />, document.getElementById('content'))