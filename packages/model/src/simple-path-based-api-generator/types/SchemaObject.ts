import { ExternalDocumentationObject } from './ExternalDocumentationObject'
import { VendorExtensions } from './VendorExtensions'
import { XmlObject } from './XmlObject'

export interface SchemaObject extends VendorExtensions {
  $ref?: string
  format?: string
  title?: string
  description?: string
  default?: any
  maxProperties?: any
  minProperties?: any
  required?: any
  type?: string
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  enum?: any[]
  multipleOf?: number
  items?: any
  allOf?: any
  properties?: any
  additionalProperties?: any
  discriminator?: string
  readOnly?: boolean
  xml?: XmlObject
  externalDocs?: ExternalDocumentationObject
  example?: any
}
