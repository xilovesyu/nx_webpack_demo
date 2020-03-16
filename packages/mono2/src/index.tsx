import  {testPromise, testArray, testArray2, CustomInput} from 'mono1'
import * as React from 'react'
import ReactDOM from 'react-dom'
import apple from './pic/apple.svg'

testPromise.then((value) => {
    console.log('value is ', value)
})
console.log(testArray)
console.log(testArray2)
const TestApp = () => {
    return (
        <div>
            <CustomInput aria-label={'just test input'}/>
            <img src={apple} alt={'no pic'}/>
        </div>
    )
}

ReactDOM.render(<TestApp />, document.getElementById('content'))
