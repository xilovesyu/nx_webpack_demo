import { Form, Input } from 'antd'
import React, { FC } from 'react'

interface TestPageProps {
  children?: React.ReactNode
}

export const TestPage: FC<TestPageProps> = () => {
  return (
    <div>
      <Form initialValues={{}}>
        <Form.Item name={'foo'}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}
