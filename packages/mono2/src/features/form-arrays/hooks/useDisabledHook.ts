import {isNil} from 'lodash'
import {useEffect, useState} from 'react'

export const useDisabledHook = function <T>(
  disabled: boolean | ((currentValue?: T) => boolean | Promise<boolean> | undefined | null) | undefined | null,
  currentValue?: T,
  options?: {
    defaultDisabled?: boolean
    nilDisabled?: boolean
  }
) {
  const {defaultDisabled = true, nilDisabled = false} = options ?? {}
  const [disabledState, setDisabledState] = useState(isNil(disabled) ? nilDisabled : defaultDisabled)
  useEffect(() => {
    if (typeof disabled === 'boolean' && disabled !== disabledState) {
      setDisabledState(disabled)
    }
    if (typeof disabled === 'function') {
      Promise.resolve(disabled(currentValue)).then((disabled) => {
        if (isNil(disabled)) {
          setDisabledState(nilDisabled)
        } else if (disabled !== disabledState) {
          setDisabledState(disabled)
        }
      })
    }
  }, [disabled])
  return disabledState
}
