import {create} from 'zustand'
import {combine, devtools} from 'zustand/middleware'
import {FormErrorScrollFieldInfo} from '../types'
import {isPathEqual} from '../utils'

interface FormErrorScrollFieldInfoStore {
  fieldInfos: FormErrorScrollFieldInfo[]
  add: (fieldInfo: FormErrorScrollFieldInfo) => void
}
export const useFormErrorScrollFields = create<FormErrorScrollFieldInfoStore>()(
  devtools(
    combine({fieldInfos: [] as FormErrorScrollFieldInfo[]}, (set) => {
      return {
        add: (newFieldInfo) =>
          set(
            (state) => {
              if (state.fieldInfos.some((fieldInfo) => isPathEqual(fieldInfo.path, newFieldInfo.path))) {
                return {
                  fieldInfos: state.fieldInfos.map((fieldInfo) => {
                    if (isPathEqual(fieldInfo.path, newFieldInfo.path)) {
                      return newFieldInfo
                    }
                    return fieldInfo
                  })
                }
              } else {
                return {
                  fieldInfos: [...state.fieldInfos, newFieldInfo]
                }
              }
            },
            undefined,
            'add form error scroll field'
          )
      }
    }),
    {
      name: 'form-error-field-info-storage'
    }
  )
)
