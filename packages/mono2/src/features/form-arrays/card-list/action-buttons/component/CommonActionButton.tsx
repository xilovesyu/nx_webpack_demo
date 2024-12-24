import {Button, ButtonProps} from 'antd'
import {ComponentClass, FC} from 'react'
import cn from 'classnames'

export interface CommonActionButtonProps {
  Renderer?: FC<CommonActionButtonProps> | ComponentClass<CommonActionButtonProps>
  onClick: () => void | Promise<void>
  className?: string
  buttonProps?: Omit<ButtonProps, 'className' | 'onClick'>
  children?: React.ReactNode
}

const DEFAUTL_CLASS_NAME = 'common-action-button'
export const CommonActionButton: FC<CommonActionButtonProps> = (props) => {
  const {Renderer, onClick, className, buttonProps, children} = props

  if (Renderer) {
    return <Renderer {...buttonProps} className={cn(DEFAUTL_CLASS_NAME, className)} onClick={onClick} />
  }
  return (
    <Button {...buttonProps} className={cn(DEFAUTL_CLASS_NAME, className)} onClick={onClick}>
      {children}
    </Button>
  )
}
