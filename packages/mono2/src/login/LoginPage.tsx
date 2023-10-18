import React from 'react'
import Button from 'antd/es/button'
import { keyCloakClient } from '../keycloak'

export const LoginPage = () => {
  const onClickLoginSSO = () => {
    const url = keyCloakClient.createLoginUrl({
      redirectUri: window.location.origin + '/'
    })
    window.location.assign(url)
  }
  return <Button onClick={onClickLoginSSO}>Login with SSO</Button>
}
