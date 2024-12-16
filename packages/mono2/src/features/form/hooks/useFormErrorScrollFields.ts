import {create} from 'zustand'
import {combine, devtools} from 'zustand/middleware'
import {FormErrorScrollFieldInfo} from '../types'

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
              return {
                fieldInfos: [...state.fieldInfos, newFieldInfo]
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
