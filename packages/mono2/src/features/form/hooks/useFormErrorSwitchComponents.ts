import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {BelongingControlInfo} from '../types'
import {isControllTypeEqual} from '../utils'

interface FormErrorSwitchComponentsStore {
  belongingControlInfos: BelongingControlInfo[]
  add: (belongingControlInfos: BelongingControlInfo) => void
}
export const useFormErrorSwitchComponents =
  create<FormErrorSwitchComponentsStore>()(
    devtools(
      (set) => ({
        belongingControlInfos: [],
        add: (belongingControlInfo) =>
          set((state) => {
            if (
              state.belongingControlInfos.some((info) =>
                isControllTypeEqual(info, belongingControlInfo)
              )
            ) {
              return {
                belongingControlInfos: state.belongingControlInfos.map(
                  (info) => {
                    if (isControllTypeEqual(info, belongingControlInfo)) {
                      return belongingControlInfo
                    }
                    return info
                  }
                )
              }
            } else {
              return {
                belongingControlInfos: [
                  ...state.belongingControlInfos,
                  belongingControlInfo
                ]
              }
            }
          })
      }),
      {
        name: 'form-error-switch-component-info-storage'
      }
    )
  )
