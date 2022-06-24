type VendorExtensionKey = `x-${string}`
export interface VendorExtensions {
  [p: VendorExtensionKey]: any
}
