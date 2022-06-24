import { VendorExtensions } from './VendorExtensions'

type ItemsObjectCommonFields = {
  format?: string
  collectionFormat?: string
  default?: any
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

type ItemsObjectArray = {
  type: 'array'
  items: ItemsObject
} & ItemsObjectCommonFields

type ItemsObjectNonArray = {
  type: 'string' | 'number' | 'integer' | 'boolean'
  items?: ItemsObject
} & ItemsObjectCommonFields

export type ItemsObject = (ItemsObjectArray | ItemsObjectNonArray) &
  VendorExtensions
