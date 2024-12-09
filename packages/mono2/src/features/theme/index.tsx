import React from 'react'
import { RouteObject } from 'react-router'
import { TestPage } from './page/TestPage'

export * from './hook'
export * from './context'

export const route: RouteObject = {
  path: 'theme',
  element: <TestPage />
}
