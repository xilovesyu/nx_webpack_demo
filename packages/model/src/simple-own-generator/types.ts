export interface SwaggerTag {
  name: string
  description?: string
}

export interface JSONSchema {
  swagger: any
  tags: SwaggerTag[]
  info: any
  paths: {
    [p: string]: {
      [p: string]: {
        tags: string[]
        summary?: string
        description?: string
        operationId?: string
        produces?: string[]
        parameters?: {
          name: string
          in: string
          required: boolean
          type: string
        }[]
      }
    }
  }
  [p: string]: any
}

export interface ApiRequestTemplateData {
  [p: string]: {
    apiClassName: string
    apiClassDescription: string
    paths: {
      [p: string]: {
        parameters: {
          in: 'body' | 'path' | 'query' | 'header' | 'formData'
          tsType: string //number, string, any,
          name: string
          required: boolean
        }[]
        requestPath: string
        [p: string]: any
      }
    }
  }
}

export interface ApiTemplateResultData {
  apiClassName: string
  apiClassDescription: string
  baseUrl: string
  requestPaths: {
    name: string
    methods: { name: string }[]
  }[]
}
