import React, { useState } from 'react'
import {
  FormErrorScrollBelongingType,
  FormErrorScrollFieldInfo
} from './FormErrorScrollType'

/**
 * Create datasource for field infos.
 */
export const useFormErrorScrollFieldInfos = () => {
  const [fieldInfos, setFieldInfos] = useState<FormErrorScrollFieldInfo[]>([])

  return {
    fieldInfos,
    setFieldInfos
  }
}

interface FormErrorContextProps {
  fieldInfos: FormErrorScrollFieldInfo[]
  setFieldInfos?: React.Dispatch<
    React.SetStateAction<FormErrorScrollFieldInfo[]>
  >
}

export const FormErrorsFieldsContext =
  React.createContext<FormErrorContextProps>({
    fieldInfos: []
  })

/**
 * Provide the type and id of the component that the error belongs to.
 */
interface FormErrorBelongingContextProps {
  type: FormErrorScrollBelongingType
  id: string
  specificId?: string
}

export const FormErrorBelongingContext =
  React.createContext<FormErrorBelongingContextProps>({
    type: 'direct',
    id: 'default-id'
  })

/**
 *
 */
interface BelongingControlInfo {
  belongsType: FormErrorScrollBelongingType
  belongsToId: string
  navigateToSpecificId: (specificId?: string) => void
}
export const useFormErrorSwitchComponents = () => {
  const [state, setstate] = useState<BelongingControlInfo[]>([])

  return {
    belongingControlInfos: state,
    setBelongingControlInfos: setstate
  }
}

export const FormErrorSwitchComponentsContext = React.createContext<{
  belongingControlInfos: BelongingControlInfo[]
  setBelongingControlInfos?: React.Dispatch<
    React.SetStateAction<BelongingControlInfo[]>
  >
}>({
  belongingControlInfos: []
})
