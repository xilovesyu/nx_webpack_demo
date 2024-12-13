import {Tabs, TabsProps} from 'antd'
import {FC, useContext, useEffect, useState} from 'react'
import {
  FormErrorBelongingContext,
  FormErrorSwitchComponentsContext
} from './FormErrorContext'

type WrapperTabsProps = Omit<TabsProps, 'id'> & {id: string}
export const WrapperTabs: FC<WrapperTabsProps> = (props) => {
  const {children, ...tabProps} = props
  const [activeKey, setActiveKey] = useState<WrapperTabsProps['activeKey']>(
    tabProps.defaultActiveKey ?? tabProps.activeKey
  )

  const {setBelongingControlInfos} = useContext(
    FormErrorSwitchComponentsContext
  )

  useEffect(() => {
    if (tabProps.activeKey !== activeKey) {
      setActiveKey(tabProps.activeKey)
    }
  }, [tabProps.activeKey])

  useEffect(() => {
    if (props.id) {
      setBelongingControlInfos?.((belongingControlInfos) => [
        ...belongingControlInfos,
        {
          belongsType: 'tab',
          belongsToId: props.id,
          navigateToSpecificId: (specficId?: string) => {
            setActiveKey(specficId)
          }
        }
      ])
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
