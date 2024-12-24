import {isNil} from 'lodash'
import {useEffect, useState} from 'react'

export const useHiddenHook = function <T>(
  hidden: boolean | ((currentValue?: T) => boolean | Promise<boolean> | undefined | null) | undefined | null,
  currentValue?: T,
  options?: {
    defaultHidden?: boolean
    nilHidden?: boolean
  }
) {
  const {defaultHidden = true, nilHidden = false} = options ?? {}
  const [hiddenState, setHiddenState] = useState(isNil(hidden) ? nilHidden : defaultHidden)
  useEffect(() => {
    if (typeof hidden === 'boolean' && hidden !== hiddenState) {
      setHiddenState(hidden)
    }
    if (typeof hidden === 'function') {
      Promise.resolve(hidden(currentValue)).then((disabled) => {
        if (isNil(disabled)) {
          setHiddenState(nilHidden)
        } else if (disabled !== hiddenState) {
          setHiddenState(disabled)
        }
      })
    }
  }, [hidden])
  return hiddenState
}
