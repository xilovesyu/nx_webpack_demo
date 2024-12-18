import {NamePath} from 'antd/es/form/interface'
import {isEqual} from 'lodash'

export const isPathEqual = (path1?: NamePath, path2?: NamePath) => {
  let path1Array = path1
  let path2Array = path2
  const typeofPath1 = typeof path1
  const typeofPath2 = typeof path2
  if (['string', 'number'].includes(typeofPath1)) {
    path1Array = [path1 as string | number]
  }
  if (['string', 'number'].includes(typeofPath2)) {
    path2Array = [path2 as string | number]
  }

  return isEqual(path1Array, path2Array)
}
