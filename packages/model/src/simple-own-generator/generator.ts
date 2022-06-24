/* eslint-disable no-console */
import {
  ApiRequestTemplateData,
  ApiTemplateResultData,
  JSONSchema,
  SwaggerTag
} from './types'
import axios from 'axios'
import nunjucks from 'nunjucks'
import { transPathParamerters, transPathToName } from './util'

nunjucks.configure('./src/simple-own-generator/template', { autoescape: true })

//1. 首先支持 url 获得 json schema
//2. 只支持2.0目前
//3. 分组只支持一个path在一个组，也就是tags数组里只有一个值
//4. 默认按照tag进行分类

export class GenerateApi {
  url: string | undefined
  jsonSchema: JSONSchema | undefined
  baseRequestUrl: string | undefined
  swaggerVersion: JSONSchema['swagger']
  swaggerInfo: JSONSchema['info']
  swaggerTags: SwaggerTag[] = []

  apiRequestTemplateData: ApiRequestTemplateData = {}

  constructor(url?: string, jsonSchema?: JSONSchema, baseRequestUrl?: string) {
    this.url = url
    this.jsonSchema = jsonSchema
    this.baseRequestUrl = baseRequestUrl
  }

  /***
   * Load json schema from given url.
   */
  async getJSONSchemaFromUrl() {
    if (!this.url) {
      return
    }
    const jsonSchema = await axios.get(this.url)
    this.jsonSchema = jsonSchema.data
  }

  /**
   * Set request default url. Current it only support http.
   * @param host
   * @param basePath
   */
  setBaseRequestUrl(host: string, basePath: string) {
    if (!this.baseRequestUrl) {
      this.baseRequestUrl = `http://${host}${basePath}`
    }
  }

  /**
   * Init how many file we need to generate and class name for each file.
   * @returns
   */
  initApiRequestTemplateData(): void {
    const { swaggerTags } = this
    swaggerTags.map((oneTag: SwaggerTag) => {
      console.log(oneTag)
      const apiClassName = transPathToName(oneTag.name, '/')
      this.apiRequestTemplateData[oneTag.name] = {
        apiClassName: apiClassName,
        apiClassDescription: oneTag.description ?? '',
        paths: {}
      }
    })
  }

  generateTemplateRequestMethods(): void {
    if (!this.jsonSchema) {
      console.error('no json schema.')
      return
    }
    const { paths } = this.jsonSchema
    Object.keys(paths).map((oneRequestPath) => {
      console.log(oneRequestPath)
      const oneRequestValue = paths[oneRequestPath]
      Object.keys(oneRequestValue).map((oneRequestMethod) => {
        const methodValue = oneRequestValue[oneRequestMethod]
        const firstTag = methodValue?.tags?.[0]

        const requestParams = methodValue.parameters
        const resultParameters = requestParams?.map((one) => {
          if (one.in === 'path' || one.in === 'query') {
            one.name
          }
          return {
            name: one.name,
            in: one.in,
            tsType: one.in === 'path' || one.in === 'query' ? 'string' : 'any',
            required: one.in === 'path' ? true : one.required
          }
        })
        console.log('resultParameters', resultParameters)

        this.apiRequestTemplateData[firstTag] = {
          ...this.apiRequestTemplateData[firstTag],
          paths: {
            ...this.apiRequestTemplateData[firstTag].paths,
            [oneRequestPath]: {
              ...this.apiRequestTemplateData[firstTag].paths[oneRequestPath],
              [oneRequestMethod]: {
                parameters: resultParameters,
                requestPath: transPathParamerters(oneRequestPath)
              }
            }
          }
        }
      })
    })
  }

  async generate() {
    if (this.url) {
      await this.getJSONSchemaFromUrl()
    }
    if (!this.jsonSchema) {
      console.error('could not get json schema')
      return
    }
    const { swagger, tags, info, host, basePath } = this.jsonSchema
    //get base request url
    this.setBaseRequestUrl(host, basePath)

    this.swaggerVersion = swagger
    this.swaggerInfo = info
    this.swaggerTags = tags

    console.log('swagger version', swagger)

    //init template data
    this.initApiRequestTemplateData()

    //generate methods
    this.generateTemplateRequestMethods()

    console.log('fff', JSON.stringify(this.apiRequestTemplateData))

    Object.keys(this.apiRequestTemplateData).map((oneKey) => {
      const { apiClassName, apiClassDescription } =
        this.apiRequestTemplateData[oneKey]
      const requestPaths: ApiTemplateResultData['requestPaths'] = []
      Object.keys(this.apiRequestTemplateData[oneKey].paths).forEach(
        (oneRequest) => {
          const requestValues =
            this.apiRequestTemplateData[oneKey].paths[oneRequest]
          const requestMethods = Object.keys(requestValues).map(
            (oneRequestMethod) => {
              console.log('test', requestValues[oneRequestMethod].parameters)
              return {
                name: oneRequestMethod,
                parameters: requestValues[oneRequestMethod].parameters,
                requestPath: requestValues[oneRequestMethod].requestPath
              }
            }
          )
          requestPaths.push({
            name: oneRequest,
            methods: requestMethods
          })
        }
      )
      const results = {
        apiClassName: apiClassName,
        apiClassDescription: apiClassDescription,
        baseUrl: this.baseRequestUrl,
        requestPaths: requestPaths
      }

      const result = nunjucks.render('api.njk', results)
      console.log(result)
    })
  }
}
