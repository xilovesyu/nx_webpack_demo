import { ReferenceObject } from './ReferenceObject'
import { ResponseObject } from './ResponseObject'
import { VendorExtensions } from './VendorExtensions'

export interface ResponsesObject extends VendorExtensions {
  default?: ResponseObject | ReferenceObject
  [p: string]: ResponseObject | ReferenceObject
}
