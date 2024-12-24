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
      A demo for automatic change the tab panel when the first error occurs in another panel.
      <WrapperForm
        formErrorWrappedProps={{
          id: 'test-page-form'
        }}
        form={form}
        initialValues={{foo: 'foo', foo2: 'foo2', bar: 'bar'}}
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
                  <WrapperFormItem name={'foo'} label={'Foo'} rules={[{required: true}]}>
                    <Input />
                  </WrapperFormItem>
                  <WrapperFormItem name={'foo2'} label={'Foo2'} rules={[{required: true}]}>
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
                  <WrapperFormItem name={'bar'} label={'Bar'} rules={[{required: true}]}>
                    <Input />
                  </WrapperFormItem>
                  <WrapperFormItem name={'bar1'} label={'Bar1'}>
                    <Input />
                  </WrapperFormItem>
                  <WrapperFormItem name={'bar2'} label={'Bar2'} rules={[{required: true}]}>
                    <Input />
                  </WrapperFormItem>
                </div>
              )
            }
          ]}
        ></WrapperTabs>

        <div style={{height: '500px'}} />
        <Button type='primary' onClick={() => form.submit()}>
          Submit
        </Button>
      </WrapperForm>
    </div>
  )
}
