import {Tabs, TabsProps} from 'antd'
import {FC, useEffect, useState} from 'react'
import {FormErrorBelongingContext} from '../context'
import {useFormErrorSwitchComponents} from '../hooks'

type WrapperTabsProps = Omit<TabsProps, 'id'> & {id: string}
export const WrapperTabs: FC<WrapperTabsProps> = (props) => {
  const {children, ...tabProps} = props
  const [activeKey, setActiveKey] = useState<WrapperTabsProps['activeKey']>(
    tabProps.defaultActiveKey ?? tabProps.activeKey
  )

  const setBelongingControlInfos = useFormErrorSwitchComponents(
    (state) => state.add
  )

  useEffect(() => {
    if (tabProps.activeKey !== activeKey) {
      setActiveKey(tabProps.activeKey)
    }
  }, [tabProps.activeKey])

  useEffect(() => {
    if (props.id) {
      setBelongingControlInfos?.({
        belongsType: 'tab',
        belongsToId: props.id,
        navigateToSpecificId: (specficId?: string) => {
          setActiveKey(specficId)
        }
      })
    }
  }, [props.id])

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
