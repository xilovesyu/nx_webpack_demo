import React, { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BasicLayout } from './Layout'
import { RouterError } from './RouterError'
import { routes } from '../features'

export const Routes = () => {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: <BasicLayout routes={routes} />,
        errorElement: <RouterError />,
        children: routes
      }
    ])
  }, [])

  return <RouterProvider router={router} />
}
