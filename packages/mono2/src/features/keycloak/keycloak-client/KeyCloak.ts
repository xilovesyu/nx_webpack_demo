import Keycloak, {KeycloakInitOptions, KeycloakLoginOptions, KeycloakLogoutOptions} from 'keycloak-js'

export class KeycloakClient {
  private _keycloakClient: Keycloak
  private hasInitialized = false
  constructor() {
    this._keycloakClient = new Keycloak({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      realm: process.env.KEYCLOAK_RELEAM!,
      url: process.env.KEYCLOAK_URL
    })
  }

  getKeyCloakClient(): Keycloak {
    return this._keycloakClient
  }

  get authenticated() {
    return this._keycloakClient.authenticated
  }

  get userInfo() {
    return this._keycloakClient.userInfo
  }

  async init(initOptions?: KeycloakInitOptions | undefined) {
    const result = await this._keycloakClient.init({
      onLoad: 'check-sso',
      ...(initOptions ?? {})
    })
    this.hasInitialized = true
    return result
  }

  createLoginUrl(options?: KeycloakLoginOptions | undefined) {
    return this._keycloakClient.createLoginUrl(options)
  }

  logout = (options?: KeycloakLogoutOptions | undefined) => {
    return this._keycloakClient.logout(options)
  }
}

export const keyCloakClient = new KeycloakClient()
