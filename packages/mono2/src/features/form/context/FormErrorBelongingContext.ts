import React from 'react'
import {FormErrorScrollBelongingType} from '../types'

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
