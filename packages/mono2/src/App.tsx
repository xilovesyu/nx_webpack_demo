import React, { FC, useEffect } from 'react'
import { CoreV1 } from './Test'

export const App: FC<{}> = () => {
  useEffect(() => {
    const coreV1 = new CoreV1()
    coreV1['/core/v1/logs/log-level'].get().then((response) => {
      // eslint-disable-next-line no-console
      console.log(response)
    })
  }, [])

  return <div></div>
}
