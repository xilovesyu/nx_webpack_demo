import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {BelongingControlInfo} from '../types'

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
          set((state) => ({
            belongingControlInfos: [
              ...state.belongingControlInfos,
              belongingControlInfo
            ]
          }))
      }),
      {
        name: 'form-error-switch-component-info-storage'
      }
    )
  )
