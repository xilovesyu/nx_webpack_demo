import { VendorExtensions } from './VendorExtensions'

export interface XmlObject extends VendorExtensions {
  name?: string
  namespace?: string
  prefix?: string
  attribute?: boolean
  wrapped?: boolean
}
