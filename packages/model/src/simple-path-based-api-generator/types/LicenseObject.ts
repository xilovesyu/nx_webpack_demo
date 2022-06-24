import { VendorExtensions } from './VendorExtensions'

export interface LicenseObject extends VendorExtensions {
  /**
   * Required. The license name used for the API.
   */
  name: string
  /**
   * A URL to the license used for the API. MUST be in the format of a URL
   */
  url?: string
}
