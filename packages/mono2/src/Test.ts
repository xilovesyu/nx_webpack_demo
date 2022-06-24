import axios from 'axios'

/**
 * Gateway: Core APIs
 **/
export class CoreV1 {
  constructor(baseUrl?: string) {
    axios.defaults.baseURL = baseUrl ?? 'http://192.168.240.33:9000/'
  }

  '/core/v1/logs/log-level' = {
    get: (data?: any) => {
      return axios.get('/core/v1/logs/log-level', data)
    }
  }

  '/core/v1/logs/log-level/{logLevel}' = {
    put: (data?: any) => {
      return axios.put('/core/v1/logs/log-level/{logLevel}', data)
    }
  }

  '/core/v1/version' = {
    get: (data?: any) => {
      return axios.get('/core/v1/version', data)
    }
  }

  '/core/v1/configuration/properties' = {
    get: (data?: any) => {
      return axios.get('/core/v1/configuration/properties', data)
    }
  }

  '/core/v1/configuration/swagger/groups' = {
    get: (data?: any) => {
      return axios.get('/core/v1/configuration/swagger/groups', data)
    }
  }

  '/core/v1/health-check' = {
    get: (data?: any) => {
      return axios.get('/core/v1/health-check', data)
    }
  }
}
