import {FormProps} from 'antd'
import {useFormErrorScrollFields} from './useFormErrorScrollFields'
import {useFormErrorSwitchComponents} from './useFormErrorSwitchComponents'
import {useEffect} from 'react'
import {isPathEqual} from '../utils'

export type WrappedFormPropsSelfProps = {
  id: string
  switchingComponentsWhenError?: boolean
}
export type WrapperFormProps<T> = FormProps<T> & {
  formErrorWrappedProps: WrappedFormPropsSelfProps
}

export const useFormErrorWrappedForm = <T>(formProps: WrapperFormProps<T>) => {
  const {
    name,
    onFinishFailed: originFinishFailed,
    formErrorWrappedProps
  } = formProps
  const {switchingComponentsWhenError = true, id} = formErrorWrappedProps ?? {}
  const {fieldInfos, add} = useFormErrorScrollFields()
  const belongingControlInfos = useFormErrorSwitchComponents(
    (state) => state.belongingControlInfos
  )

  useEffect(() => {
    add({
      path: name || '',
      belongsTo: 'direct',
      belongsToId: id,
      belongsToSpecificId: id
    })
  }, [id])

  const onFinishFailed: FormProps['onFinishFailed'] = (error) => {
    const {errorFields} = error
    if (errorFields?.[0] && switchingComponentsWhenError) {
      const {name} = errorFields[0]
      const currentFieldInfo = fieldInfos.find((one) =>
        isPathEqual(one.path, name)
      )
      if (currentFieldInfo) {
        const {belongsTo, belongsToId, belongsToSpecificId} = currentFieldInfo
        if (belongsTo !== 'direct') {
          const belongingControlInfo = belongingControlInfos.find(
            (one) =>
              one.belongsType === belongsTo && one.belongsToId === belongsToId
          )
          belongingControlInfo?.navigateToSpecificId?.(belongsToSpecificId)
        }
      }
      setTimeout(() => {
        formProps?.form?.scrollToField(name)
      })
    }
    originFinishFailed?.(error)
  }

  return {
    onFinishFailed
  }
}
