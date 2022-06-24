import { ItemsObject } from './ItemsObject'
import { VendorExtensions } from './VendorExtensions'

type HeaderCommonFields = {
  description?: string
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

type HeaderObjectArray = {
  type: 'array'
  items: ItemsObject
} & HeaderCommonFields

type HeaderObjectNonArray = {
  type: 'string' | 'number' | 'integer' | 'boolean'
  items?: ItemsObject
} & HeaderCommonFields

export type HeaderObject = (HeaderObjectNonArray | HeaderObjectArray) &
  VendorExtensions
