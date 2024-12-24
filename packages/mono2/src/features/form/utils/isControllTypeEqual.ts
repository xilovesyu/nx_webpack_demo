import {BelongingControlInfo} from '../types'

export const isControllTypeEqual = (a?: BelongingControlInfo, b?: BelongingControlInfo) => {
  return a?.belongsType === b?.belongsType && a?.belongsToId === b?.belongsToId
}
