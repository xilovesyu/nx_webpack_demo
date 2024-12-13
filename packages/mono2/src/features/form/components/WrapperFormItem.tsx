import {Form, FormItemProps} from 'antd'
import {PropsWithChildren, useContext, useEffect} from 'react'
import {
  FormErrorBelongingContext,
  FormErrorsFieldsContext
} from './FormErrorContext'

type WrapperFormItemProps<T> = FormItemProps<T>

export const WrapperFormItem = <T,>(
  props: PropsWithChildren<WrapperFormItemProps<T>>
) => {
  const {children, ...formItemProps} = props
  const {type, id, specificId} = useContext(FormErrorBelongingContext)
  const {setFieldInfos} = useContext(FormErrorsFieldsContext)
  useEffect(() => {
    if (props.name && type && id && specificId) {
      setFieldInfos?.((fieldInfos) => [
        ...fieldInfos,
        {
          path: props.name,
          belongsTo: type,
          belongsToId: id,
          belongsToSpecificId: specificId
        }
      ])
    }
  }, [props.name, type, id, specificId])
  return <Form.Item {...formItemProps}>{children}</Form.Item>
}
