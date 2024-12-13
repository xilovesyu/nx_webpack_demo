import {route as keyCloakRoute} from './keycloak'
import {route as formRoute} from './form'
import {route as themeRoute} from './theme'

export const routes = [keyCloakRoute, formRoute, themeRoute]

export {useTheme, useThemeContext, ThemeContext} from './theme'
