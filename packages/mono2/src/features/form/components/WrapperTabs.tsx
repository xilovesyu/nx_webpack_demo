import {Tabs, TabsProps} from 'antd'
import {FC} from 'react'
import {FormErrorBelongingContext} from '../context'
import {useFormErrorWrappedTabs} from '../hooks'

type WrapperTabsProps = Omit<TabsProps, 'id'> & {id: string}

export const WrapperTabs: FC<WrapperTabsProps> = (props) => {
  const {children, ...tabProps} = props

  const {activeKey, setActiveKey} = useFormErrorWrappedTabs(tabProps)

  const newItems = tabProps.items?.map((item) => {
    return {
      ...item,
      children: (
        <FormErrorBelongingContext.Provider
          value={{id: props.id, type: 'tab', specificId: item.key}}
        >
          {item.children}
        </FormErrorBelongingContext.Provider>
      )
    }
  })

  return (
    <FormErrorBelongingContext.Provider value={{id: props.id, type: 'tab'}}>
      <Tabs
        {...tabProps}
        items={newItems}
        activeKey={activeKey}
        onChange={setActiveKey}
      >
        {children}
      </Tabs>
    </FormErrorBelongingContext.Provider>
  )
}
