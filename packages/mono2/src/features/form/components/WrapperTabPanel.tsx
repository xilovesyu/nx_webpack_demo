import {Tabs, TabPaneProps} from 'antd'
import {FC, useContext} from 'react'
import {FormErrorBelongingContext} from '../context'

type WrapperTabPanelProps = TabPaneProps

export const WrapperTabPanel: FC<WrapperTabPanelProps> = (props) => {
  const {children, ...tabProps} = props
  const {type, id} = useContext(FormErrorBelongingContext)

  return (
    <Tabs.TabPane {...tabProps}>
      <FormErrorBelongingContext.Provider value={{type, id, specificId: props.tabKey}}>
        {children}
      </FormErrorBelongingContext.Provider>
    </Tabs.TabPane>
  )
}
