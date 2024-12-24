import {Form, FormItemProps} from 'antd'
import {PropsWithChildren} from 'react'
import {useFormErrorWrappedField} from '../hooks'

export const WrapperFormItem = <T,>(props: PropsWithChildren<FormItemProps<T>>) => {
  const {children, ...formItemProps} = props
  useFormErrorWrappedField(props)
  return <Form.Item {...formItemProps}>{children}</Form.Item>
}
