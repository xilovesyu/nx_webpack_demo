import { Input } from 'antd'
import React, { FC, useState } from 'react'

export const App: FC<unknown> = () => {
  const [input, setInput] = useState('')
  return (
    <>
      <label htmlFor='test' title={'test'}>
        <input
          placeholder={'test'}
          id={'test'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  )
}
