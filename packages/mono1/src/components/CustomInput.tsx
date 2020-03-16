import * as React from 'react'
import { Input } from 'antd'
interface ICustomInputProps {
    label: string
}
export class CustomInput extends React.Component<ICustomInputProps, any> {
    render(): any {
        return (
            <Input aria-label={this.props.label} {...this.props}/>
        )
    }
}