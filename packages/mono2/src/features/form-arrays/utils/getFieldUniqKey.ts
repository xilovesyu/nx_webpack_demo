import {get} from 'lodash'
import {FieldKeyProp} from '../types'

const DEFAULT_NOT_FOUND_KEY = '__default_not_found_key__'
export const getFieldUniqKey = <T extends object>(
  field: T | null,
  fieldKey: FieldKeyProp<T>
) => {
  if (!field) {
    return DEFAULT_NOT_FOUND_KEY
  }
  if (fieldKey in field) {
    return get(field, fieldKey)
  } else {
    throw new Error('NO FIELD KEY FOUND IN FIELD')
  }
}
