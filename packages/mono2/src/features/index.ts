import {route as keyCloakRoute} from './keycloak'
import {route as formRoute} from './form'
import {route as themeRoute} from './theme'
import {route as formArraysRoute} from './form-arrays'

export const routes = [keyCloakRoute, formRoute, themeRoute, formArraysRoute]

export {useTheme, useThemeContext, ThemeContext} from './theme'
