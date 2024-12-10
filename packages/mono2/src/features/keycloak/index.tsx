import { RouteObject } from 'react-router'
import { TestPage } from './page/TestPage'

export * from './keycloak-client'

export const route: RouteObject = {
  path: 'keycloak',
  element: <TestPage />
}
