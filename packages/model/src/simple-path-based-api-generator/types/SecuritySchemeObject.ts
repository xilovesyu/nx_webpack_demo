import { ScopesObject } from './ScopesObject'
import { VendorExtensions } from './VendorExtensions'

export interface SecuritySchemeObject extends VendorExtensions {
  /**
   * Any	Required. The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2".
   */
  type: string
  /**
   * 	Any	A short description for security scheme.
   */
  description?: string
  /**
   * 	apiKey	Required. The name of the header or query parameter to be used.
   */
  name?: string
  /**
   * 	apiKey	Required The location of the API key. Valid values are "query" or "header".
   */
  in?: string
  /**
   * oauth2	Required. The flow used by the OAuth2 security scheme. Valid values are "implicit", "password", "application" or "accessCode".
   */
  flow?: string
  /**
   * 	oauth2 ("implicit", "accessCode")	Required. The authorization URL to be used for this flow. This SHOULD be in the form of a URL.
   */
  authorizationUrl?: string
  /**
   * oauth2 ("password", "application", "accessCode")	Required. The token URL to be used for this flow. This SHOULD be in the form of a URL.
   */
  tokenUrl?: string
  /**
   * oauth2	Required. The available scopes for the OAuth2 security scheme
   */
  scopes?: ScopesObject
}
