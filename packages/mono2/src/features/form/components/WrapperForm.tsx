import {Form} from 'antd'
import {PropsWithChildren} from 'react'
import {FormErrorBelongingContext} from '../context'
import {useFormErrorWrappedForm, WrapperFormProps} from '../hooks'

export const WrapperForm = <T,>(
  props: PropsWithChildren<WrapperFormProps<T>>
) => {
  const {formErrorWrappedProps, children, ...formProps} = props
  const {id} = formErrorWrappedProps
  const {onFinishFailed} = useFormErrorWrappedForm(props)
  return (
    <FormErrorBelongingContext.Provider value={{type: 'direct', id: id}}>
      <Form {...formProps} onFinishFailed={onFinishFailed}>
        {children}
      </Form>
    </FormErrorBelongingContext.Provider>
  )
}
