import path from 'node:path'
import {generateApi} from 'swagger-typescript-api'

/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: 'PetStoreApi.ts',
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), './src/swagger-typescript-api/automatic'),
  //url: 'http://api.com/swagger.json',
  input: path.resolve(process.cwd(), './src/swagger-typescript-api/target/petstore.json'),
  //   spec: {
  //     swagger: '2.0',
  //     info: {
  //       version: '1.0.0',
  //       title: 'Swagger Petstore'
  //     },
  //     paths: {
  //       '/pets': {
  //         get: {
  //           description: 'Returns all pets from the system that the user has access to',
  //           operationId: 'findPets',
  //           parameters: [
  //             {
  //               name: 'tags',
  //               in: 'query',
  //               description: 'tags to filter by',
  //               required: false,
  //               type: 'array',
  //               items:{}
  //             }
  //           ],
  //           responses: {
  //             '200': {
  //               description: 'pet response',
  //               schema: {
  //                 type: 'array',
  //                 items: {
  //                   $ref: '#/definitions/Pet'
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   },
  //templates: path.resolve(process.cwd(), './api-templates'),
  httpClientType: 'fetch', // or "fetch"
  defaultResponseAsSuccess: false,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  extractEnums: false,
  unwrapResponseData: false,
  prettier: {
    // By default prettier config is load from your project
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript'
  },
  defaultResponseType: 'void',
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  typePrefix: '',
  typeSuffix: '',
  enumKeyPrefix: '',
  enumKeySuffix: '',
  addReadonly: false,
  sortTypes: false,
  //sortRouters: false,
  extractingOptions: {
    requestBodySuffix: ['Payload', 'Body', 'Input'],
    requestParamsSuffix: ['Params'],
    responseBodySuffix: ['Data', 'Result', 'Output'],
    responseErrorSuffix: ['Error', 'Fail', 'Fails', 'ErrorData', 'HttpError', 'BadResponse']
  }
  /** allow to generate extra files based with this extra templates, see more below */
  //   extraTemplates: [],
  //   anotherArrayType: false,
  //   fixInvalidTypeNamePrefix: 'Type',
  //   fixInvalidEnumKeyPrefix: 'Value',
  //   codeGenConstructs: (constructs) => ({
  //     ...constructs,
  //     RecordType: (key, value) => 'MyRecord<key, value>'
  //   }),
  //   primitiveTypeConstructs: (constructs) => ({
  //     ...constructs,
  //     string: {
  //       'date-time': 'Date'
  //     }
  //   }),
  //   hooks: {
  //     onCreateComponent: (component) => {},
  //     onCreateRequestParams: (rawType) => {},
  //     onCreateRoute: (routeData) => {},
  //     onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
  //     onFormatRouteName: (routeInfo, templateRouteName) => {},
  //     onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
  //     onInit: (configuration) => {},
  //     onPreParseSchema: (originalSchema, typeName, schemaType) => {},
  //     onParseSchema: (originalSchema, parsedSchema) => {},
  //     onPrepareConfig: (currentConfiguration) => {}
  //   }
})

// generateTemplates({
//   cleanOutput: false,
//   output: PATH_TO_OUTPUT_DIR,
//   httpClientType: 'fetch',
//   modular: false,
//   silent: false,
//   rewrite: false
// })
