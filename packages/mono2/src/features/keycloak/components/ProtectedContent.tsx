import React, { FC, PropsWithChildren } from 'react'
import { keyCloakClient } from '..'
import { Alert } from 'antd'

interface ProtectedContentProps {
  children?: React.ReactNode
}
export const ProtectedContent: FC<ProtectedContentProps> = (
  props: PropsWithChildren<ProtectedContentProps>
) => {
  const isLogged = keyCloakClient.authenticated
  if (!isLogged) {
    return (
      <Alert
        type='warning'
        message={
          <div>
            Not Allowed to view protected content as you are not logged in
          </div>
        }
      />
    )
  }

  return <div>{props.children}</div>
}
