const {exec} = require('child_process')
const path = require('path')

const url = 'http://192.168.240.33:9000/swagger.json?apiGroup=All%20APIs'
const outputDir = path.resolve(process.cwd(), './src/swagger-codegen/automatic')

exec(`java -jar ./src/swagger-codegen/swagger-codegen-cli.jar generate -i ${url} -l typescript-fetch -o ${outputDir}`)
