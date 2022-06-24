import { ExampleObject } from './ExampleObject'
import { HeadersObject } from './HeadersObject'
import { SchemaObject } from './SchemaObject'
import { VendorExtensions } from './VendorExtensions'

export interface ResponseObject extends VendorExtensions {
  description: string
  schema?: SchemaObject
  headers?: HeadersObject
  examples?: ExampleObject
}
