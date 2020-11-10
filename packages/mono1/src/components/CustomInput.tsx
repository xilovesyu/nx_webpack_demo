import * as React from 'react'
import { Input } from 'antd'
import testImg from '../pic/apple.svg'

interface CustomInputProps {
    'aria-label': string;
}
export class CustomInput extends React.Component<CustomInputProps, any> {
    render(): any {
        return (
            <>
                <img src={testImg} alt={'test'} />
            <Input aria-label={this.props['aria-label']} {...this.props}/>
            </>
        )
    }
}
