import { OperationObject } from './OperationObject'
import { ParameterObject } from './ParameterObject'
import { ReferenceObject } from './ReferenceObject'
import { VendorExtensions } from './VendorExtensions'

export interface PathItemObject extends VendorExtensions {
  $ref?: string
  get?: OperationObject
  put?: OperationObject
  post?: OperationObject
  delete?: OperationObject
  options?: OperationObject
  head?: OperationObject
  patch?: OperationObject
  parameters?: ParameterObject | ReferenceObject
}
