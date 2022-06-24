/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
const { generateApi } = require('swagger-typescript-api')
const path = require('path')

//https://github.com/acacode/swagger-typescript-api
/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  name: 'AutoGenerateAPI.ts',
  output: path.resolve(process.cwd(), './src/swagger-typescript-api/automatic'),
  url: 'http://192.168.240.33:9000/swagger.json?apiGroup=All%20APIs'
  //input: path.resolve(process.cwd(), './foo/swagger.json'),
  // spec: {
  //     swagger: '2.0',
  //     info: {
  //         version: '1.0.0',
  //         title: 'Swagger Petstore'
  //     }
  //     // ...
  // },
  //templates: path.resolve(process.cwd(), './api-templates'),
  //httpClientType: 'axios', // or "fetch"
  //defaultResponseAsSuccess: false,
  //generateRouteTypes: false,
  //generateResponses: true,
  //toJS: false,
  //extractRequestParams: false,
  //extractRequestBody: false,
  // prettier: {
  //     printWidth: 120,
  //     tabWidth: 2,
  //     trailingComma: 'all',
  //     parser: 'typescript'
  // },
  //defaultResponseType: 'void',
  //singleHttpClient: true,
  //cleanOutput: false,
  //enumNamesAsValues: false,
  // moduleNameFirstTag: false,
  // generateUnionEnums: false,
  // extraTemplates: [],
  // hooks: {
  //     onCreateComponent: (component) => { },
  //     onCreateRequestParams: (rawType) => { },
  //     onCreateRoute: (routeData) => { },
  //     onCreateRouteName: (routeNameInfo, rawRouteInfo) => { },
  //     onFormatRouteName: (routeInfo, templateRouteName) => { },
  //     onFormatTypeName: (typeName, rawTypeName) => { },
  //     onInit: (configuration) => { },
  //     onParseSchema: (originalSchema, parsedSchema) => { },
  //     onPrepareConfig: (currentConfiguration) => { }
  // }
})
// .then(({ files, configuration }) => {
//     files.forEach(({ content, name }) => {
//         fs.writeFile(path, content)
//     })
// })
// .catch(e => console.error(e))
