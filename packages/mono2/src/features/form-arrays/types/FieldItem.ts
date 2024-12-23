import {defaultFieldKey} from '../constant'

export type FieldKeyProp<T extends object> = keyof T | typeof defaultFieldKey
