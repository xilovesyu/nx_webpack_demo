import {CustomInput} from '@demo/mono1'
import {Button, Form, Input} from 'antd'
import React, {FC} from 'react'
import {WrapperForm, WrapperFormItem, WrapperTabs} from '../components'

interface TestPageProps {
  children?: React.ReactNode
}

export const TestPage: FC<TestPageProps> = () => {
  const [form] = Form.useForm()

  return (
    <div>
      A demo for automatic change the tab panel when the first error occurs in
      another panel.
      <WrapperForm
        id='test-page-form'
        form={form}
        initialValues={{foo: 'foo', foo2: 'foo2'}}
        onFinish={(values) => alert(JSON.stringify(values))}
      >
        <WrapperTabs
          id='default-tabs'
          defaultActiveKey='firstTab'
          items={[
            {
              forceRender: true,
              key: 'firstTab',
              label: 'First Tab',
              children: (
                <div>
                  <WrapperFormItem
                    name={'foo'}
                    label={'Foo'}
                    rules={[{required: true}]}
                  >
                    <CustomInput id='foo' />
                  </WrapperFormItem>
                  <WrapperFormItem
                    name={'foo2'}
                    label={'Foo2'}
                    rules={[{required: true}]}
                  >
                    <Input />
                  </WrapperFormItem>
                </div>
              )
            },
            {
              forceRender: true,
              key: 'secondTab',
              label: 'Second Tab',
              children: (
                <div>
                  <WrapperFormItem
                    name={'bar'}
                    label={'Bar'}
                    rules={[{required: true}]}
                  >
                    <CustomInput id={'bar'} />
                  </WrapperFormItem>
                </div>
              )
            }
          ]}
        ></WrapperTabs>

        <div style={{height: '500px'}} />
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </WrapperForm>
    </div>
  )
}
