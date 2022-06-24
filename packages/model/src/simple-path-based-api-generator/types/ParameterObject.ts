import { ItemsObject } from './ItemsObject'
import { SchemaObject } from './SchemaObject'
import { VendorExtensions } from './VendorExtensions'

type PathParameterObject = {
  in: 'path'
  required: true
} & OtherThanBodyFields

type BodyParameterObject = {
  in: 'body'
  required?: boolean
  schema: SchemaObject
}

type OtherParameterObject = {
  in: 'query' | 'header' | 'formData'
  required?: boolean
} & OtherThanBodyFields

type OtherThanBodyFieldsCommon = {
  format?: string
  allowEmptyValue?: boolean
  collectionFormat?: string
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
}
type OtherThanBodyFieldsNonArray = {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'file'
  items?: ItemsObject
} & OtherThanBodyFieldsCommon

type OtherThanBodyFieldsArray = {
  type: 'array'
  items: ItemsObject
} & OtherThanBodyFieldsCommon

type OtherThanBodyFields =
  | OtherThanBodyFieldsNonArray
  | OtherThanBodyFieldsArray

export type ParameterObject = {
  name: string
  description?: string
} & (PathParameterObject | BodyParameterObject | OtherParameterObject) &
  VendorExtensions
