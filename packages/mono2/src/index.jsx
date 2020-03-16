import  {testPromise, testArray, testArray2, CustomInput} from 'mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {CustomInput as AnotherInput} from './components/CustomInput'

testPromise.then((value) => {
    console.log('value is ', value)
})
console.log(testArray)
console.log(testArray2)
const TestApp = () => {
    return (
        <div>
            <CustomInput />
            <AnotherInput  label={'test'}/>
        </div>
    )
}
ReactDOM.render(<TestApp />, document.getElementById('content'))