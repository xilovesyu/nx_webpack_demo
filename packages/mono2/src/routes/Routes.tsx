import React, { useMemo } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { LoginPage } from '../login'
import { Admin } from '../admin'
import { keyCloakClient } from '../keycloak'
import { ProtectedRouteElement } from './ProtectedRoute'

export const Routes = () => {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: keyCloakClient.authenticated ? (
          <Navigate to='/admin' />
        ) : (
          <Navigate to='/login' />
        )
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/admin',
        element: (
          <ProtectedRouteElement>
            <Admin />
          </ProtectedRouteElement>
        )
      }
    ])
  }, [])

  return <RouterProvider router={router} />
}
