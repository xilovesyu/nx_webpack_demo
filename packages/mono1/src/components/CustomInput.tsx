import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface CustomInputProps extends InputProps {
  id: string
}
export const CustomInput: React.FC<CustomInputProps> = (
  props: CustomInputProps
) => {
  const { id } = props
  return (
    <div>
      <label htmlFor={id} >
        <Input {...props} id={id} />
      </label>
    </div>
  )
}
