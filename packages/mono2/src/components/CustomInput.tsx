import * as React from 'react'
import { Input } from 'antd'

interface CustomInputProps {
  label: string,
}
export class CustomInput extends React.Component<CustomInputProps, any> {
  render(): any {
    return <Input aria-label={this.props.label} {...this.props} />
  }
}
