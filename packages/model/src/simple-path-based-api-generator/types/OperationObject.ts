import { ExternalDocumentationObject } from './ExternalDocumentationObject'
import { ParameterObject } from './ParameterObject'
import { ReferenceObject } from './ReferenceObject'
import { ResponsesObject } from './ResponsesObject'
import { SecurityRequirementObject } from './SecurityRequirementObject'
import { VendorExtensions } from './VendorExtensions'

export interface OperationObject extends VendorExtensions {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: ExternalDocumentationObject
  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is recommended to follow common programming naming conventions.
   */
  operationId?: string
  consumes?: string[]
  produces?: string[]
  parameters?: (ParameterObject | ReferenceObject)[]
  responses: ResponsesObject
  schemes?: string[]
  deprecated?: boolean
  security?: SecurityRequirementObject[]
}
