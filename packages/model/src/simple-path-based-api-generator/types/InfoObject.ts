import { ContactObject } from './ContactObject'
import { LicenseObject } from './LicenseObject'
import { VendorExtensions } from './VendorExtensions'

export interface InfoObject extends VendorExtensions {
  /**
   * Required. The title of the application.
   */
  title: string
  description?: string
  termsOfService?: string
  contact?: ContactObject
  license?: LicenseObject
  /**
   * Required Provides the version of the application API (not to be confused with the specification version)
   */
  version: string
}
