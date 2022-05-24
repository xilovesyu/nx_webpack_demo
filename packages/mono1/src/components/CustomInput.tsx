import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface CustomInputProps extends InputProps{
    'aria-label': string
}
export class CustomInput extends React.Component<CustomInputProps, any> {
    render(): any {
        return (
            <>
                <Input {...this.props} />
            </>
        )
    }
}
