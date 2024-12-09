import React, { FC } from 'react'
import { LogoutButton } from '../login'
import { keyCloakClient } from '../keycloak-feature'

export const Admin: FC = () => {
  return (
    <div>
      Hello {keyCloakClient.getKeyCloakClient().idTokenParsed?.name ?? ''},
      welcome vist admin page.
      <LogoutButton />
    </div>
  )
}
