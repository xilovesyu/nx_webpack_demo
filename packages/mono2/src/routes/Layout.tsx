import React, { useCallback, useMemo } from 'react'
import { Layout, Menu } from 'antd'
import { FC } from 'react'
import { Outlet, RouteObject, useNavigate } from 'react-router-dom'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

export interface BasicLayoutProps {
  children?: React.ReactNode
  routes?: RouteObject[]
}

export const BasicLayout: FC<BasicLayoutProps> = ({ routes }) => {
  const navigate = useNavigate()
  const menus: MenuItemType[] = useMemo(() => {
    return (
      routes?.map((route) => {
        return {
          key: route.path!,
          label: route.path
        }
      }) ?? []
    )
  }, [routes])

  const onClickRoute = useCallback(({ key }: { key: string }) => {
    navigate(key)
  }, [])
  return (
    <Layout className='root-layout'>
      <Layout.Header>I am header</Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu onClick={onClickRoute} mode='vertical' items={menus} />
        </Layout.Sider>
        <Layout>
          <Layout.Content className='root-layout-content'>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
