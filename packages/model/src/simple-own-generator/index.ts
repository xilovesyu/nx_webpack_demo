import { GenerateApi } from './generator'

const url = 'http://192.168.240.33:9000/swagger.json?apiGroup=All%20APIs'

const generator = new GenerateApi(url)
generator.generate()
