import { DefinitionsObject } from './DefinitionsObject'
import { ExternalDocumentationObject } from './ExternalDocumentationObject'
import { InfoObject } from './InfoObject'
import { ParametersDefinitionsObject } from './ParametersDefinitionsObject'
import { PathsObject } from './PathsObject'
import { ResponsesDefinitionsObject } from './ResponsesDefinitionsObject'
import { SecurityDefinitionsObject } from './SecurityDefinitionsObject'
import { SecurityRequirementObject } from './SecurityRequirementObject'
import { TagObject } from './TagObject'
import { VendorExtensions } from './VendorExtensions'

export interface SwaggerObject extends VendorExtensions {
  //default to 2.0
  swagger: string
  info: InfoObject
  host?: string
  /**
   * The base path on which the API is served, which is relative to the host. If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/). The basePath does not support path templating.
   */
  basePath?: string
  schemes?: string[]
  consumes?: string[]
  produces?: string[]
  paths: PathsObject
  definitions?: DefinitionsObject
  parameters?: ParametersDefinitionsObject
  responses?: ResponsesDefinitionsObject
  securityDefinitions?: SecurityDefinitionsObject
  security?: SecurityRequirementObject[]
  tags?: TagObject[]
  externalDocs?: ExternalDocumentationObject
}
