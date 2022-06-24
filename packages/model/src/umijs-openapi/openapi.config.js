const { generateService } = require('@umijs/openapi')

generateService({
  requestLibPath: 'import request from \'umi-request\'',
  schemaPath:
    'http://192.168.240.33:9000/swagger.json?apiGroup=CMS%20Agent%20APIs',
  serversPath: './src/umijs-openapi/automatic'
})
