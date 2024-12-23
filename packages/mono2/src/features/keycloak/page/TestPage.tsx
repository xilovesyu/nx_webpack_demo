import {Button, Row, Typography} from 'antd'
import React, {FC, useEffect, useState} from 'react'
import {keyCloakClient} from '../keycloak-client'
import {ProtectedContent} from '../components/ProtectedContent'
import {PublicContent} from '../components/PublicContent'
interface TestPageProps {
  children?: React.ReactNode
}

export const TestPage: FC<TestPageProps> = () => {
  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    if (!init) {
      keyCloakClient
        .init()
        .then(() => {
          setInit(true)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [init])

  const onClickLoginSSO = () => {
    const url = keyCloakClient.createLoginUrl({
      redirectUri: window.location.origin + '/keycloak'
    })
    window.location.assign(url)
  }

  const onClickLogOutSSO = () => {
    keyCloakClient.logout({
      redirectUri: window.location.origin
    })
  }

  const isAuthenticated = keyCloakClient.authenticated

  return (
    <div>
      <Button onClick={onClickLoginSSO}>Login in with SSO</Button>
      <Button onClick={onClickLogOutSSO}>Logout</Button>
      <Typography.Text>
        Logged in? : {isAuthenticated ? 'true' : 'false'}
      </Typography.Text>
      <ProtectedContent>
        <Row>
          <Typography.Text>You are viewing protected content</Typography.Text>
        </Row>
      </ProtectedContent>
      <PublicContent>
        <Row>
          <Typography.Text>You are viewing public content</Typography.Text>
        </Row>
      </PublicContent>
    </div>
  )
}
