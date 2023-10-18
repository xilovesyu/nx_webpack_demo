import React from 'react'
import Button from 'antd/es/button'
import { keyCloakClient } from '../keycloak'

export const LogoutButton = () => {
  const onClickLogOut = () => {
    keyCloakClient.logout({
      redirectUri: window.location.origin
    })
  }
  return <Button onClick={onClickLogOut}>Logout</Button>
}
