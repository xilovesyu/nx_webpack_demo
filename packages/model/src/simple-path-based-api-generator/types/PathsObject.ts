import { PathItemObject } from './PathItemObject'
import { VendorExtensions } from './VendorExtensions'

type PathItemKey = `/${string}`

export interface PathsObject extends VendorExtensions {
  [p: PathItemKey]: PathItemObject
}
