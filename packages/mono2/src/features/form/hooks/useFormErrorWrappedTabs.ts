import {TabsProps} from 'antd'
import {useState, useEffect, useCallback} from 'react'
import {useFormErrorSwitchComponents} from './useFormErrorSwitchComponents'

export const useFormErrorWrappedTabs = (props: TabsProps) => {
  const [activeKey, setActiveKey] = useState<string | undefined>(props.activeKey ?? props.defaultActiveKey)

  const setBelongingControlInfos = useFormErrorSwitchComponents((state) => state.add)

  useEffect(() => {
    const changedActiveKeyProp = props.activeKey ?? props.defaultActiveKey
    if (changedActiveKeyProp && changedActiveKeyProp !== activeKey) {
      setActiveKey(changedActiveKeyProp)
    }
  }, [props.activeKey, props.defaultActiveKey])

  const exposeSetActiveKey = useCallback((specficId?: string) => {
    setActiveKey(specficId)
  }, [])

  useEffect(() => {
    if (props.id) {
      setBelongingControlInfos?.({
        belongsType: 'tab',
        belongsToId: props.id,
        navigateToSpecificId: exposeSetActiveKey
      })
    }
  }, [props.id, setBelongingControlInfos, setActiveKey])

  return {
    activeKey,
    setActiveKey
  }
}
