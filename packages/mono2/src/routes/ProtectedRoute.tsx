import React, { FC, PropsWithChildren } from 'react'
import { keyCloakClient } from '../keycloak'
import { useLocation, useNavigate } from 'react-router'
import { Button } from 'antd'

export const ProtectedRouteElement: FC = (
  props: PropsWithChildren<unknown>
) => {
  const isLogged = keyCloakClient.authenticated

  const location = useLocation()
  const navigate = useNavigate()

  if (!isLogged) {
    return (
      <div>
        Not Login in when visited <pre>{location?.pathname ?? ''}</pre>
        <Button
          onClick={() => {
            navigate('/login')
          }}
        >
          To Login In Page
        </Button>
      </div>
    )
  }

  return <div>{props.children}</div>
}
