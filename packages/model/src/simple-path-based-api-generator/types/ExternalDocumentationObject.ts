import { VendorExtensions } from './VendorExtensions'

export interface ExternalDocumentationObject extends VendorExtensions {
  description?: string
  url: string
}
