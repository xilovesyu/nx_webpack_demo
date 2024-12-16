import {Form, FormProps} from 'antd'
import {PropsWithChildren, useEffect} from 'react'
import {isEqual} from 'lodash'
import {FormErrorBelongingContext} from '../context'
import {useFormErrorScrollFields, useFormErrorSwitchComponents} from '../hooks'

type WrapperFormProps<T> = FormProps<T> & {id: string}

export const WrapperForm = <T,>(
  props: PropsWithChildren<WrapperFormProps<T>>
) => {
  const {children, id, ...formProps} = props
  const {fieldInfos, add} = useFormErrorScrollFields()
  const belongingControlInfos = useFormErrorSwitchComponents(
    (state) => state.belongingControlInfos
  )

  useEffect(() => {
    add({
      path: props.name || '',
      belongsTo: 'direct',
      belongsToId: id,
      belongsToSpecificId: id
    })
  }, [id])

  const onFinishFailed: FormProps['onFinishFailed'] = (error) => {
    const {errorFields} = error
    if (errorFields?.[0]) {
      const {name} = errorFields[0]
      const currentFieldInfo = fieldInfos.find((one) => {
        if (typeof one.path === 'string' || typeof one.path === 'number') {
          return isEqual([one.path], name)
        }
        return isEqual(one.path, name)
      })
      if (currentFieldInfo) {
        const {belongsTo, belongsToId, belongsToSpecificId} = currentFieldInfo
        if (belongsTo !== 'direct') {
          const {navigateToSpecificId} =
            belongingControlInfos.find(
              (one) =>
                one.belongsType === belongsTo && one.belongsToId === belongsToId
            ) ?? {}
          navigateToSpecificId?.(belongsToSpecificId)
        }
      }
      setTimeout(() => {
        props.form?.scrollToField(name)
      })
    }
  }
  return (
    <FormErrorBelongingContext.Provider value={{type: 'direct', id: id}}>
      <Form {...formProps} onFinishFailed={onFinishFailed}>
        {children}
      </Form>
    </FormErrorBelongingContext.Provider>
  )
}
