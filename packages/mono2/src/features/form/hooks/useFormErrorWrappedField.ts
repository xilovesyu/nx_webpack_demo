import {FormItemProps} from 'antd'
import {useContext, useEffect} from 'react'
import {FormErrorBelongingContext} from '../context'
import {useFormErrorScrollFields} from './useFormErrorScrollFields'

export const useFormErrorWrappedField = <T = any>(props: FormItemProps<T>) => {
  const {type, id, specificId} = useContext(FormErrorBelongingContext)
  const setFieldInfos = useFormErrorScrollFields((state) => state.add)
  useEffect(() => {
    if (props.name && type && id && specificId) {
      setFieldInfos?.({
        path: props.name,
        belongsTo: type,
        belongsToId: id,
        belongsToSpecificId: specificId
      })
    }
  }, [props.name, type, id, specificId])
}
