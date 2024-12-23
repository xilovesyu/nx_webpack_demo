import {FC} from 'react'
import {
  CommonActionButton,
  CommonActionButtonProps
} from './component/CommonActionButton'
import cn from 'classnames'

export const AddButton: FC<CommonActionButtonProps> = (props) => {
  return (
    <CommonActionButton
      {...props}
      className={cn('add-button', props.className)}
    >
      {props.children ? props.children : 'Add'}
    </CommonActionButton>
  )
}

export const CancelButton: FC<CommonActionButtonProps> = (props) => {
  return (
    <CommonActionButton
      {...props}
      className={cn('cancel-button', props.className)}
    >
      {props.children ? props.children : 'Cancel'}
    </CommonActionButton>
  )
}

export const ConfirmButton: FC<CommonActionButtonProps> = (props) => {
  return (
    <CommonActionButton
      {...props}
      className={cn('confirm-button', props.className)}
    >
      {props.children ? props.children : 'Confirm'}
    </CommonActionButton>
  )
}

export const DeleteButton: FC<CommonActionButtonProps> = (props) => {
  return (
    <CommonActionButton
      {...props}
      className={cn('delete-button', props.className)}
    >
      {props.children ? props.children : 'Delete'}
    </CommonActionButton>
  )
}

export const EditButton: FC<CommonActionButtonProps> = (props) => {
  return (
    <CommonActionButton
      {...props}
      className={cn('edit-button', props.className)}
    >
      {props.children ? props.children : 'Edit'}
    </CommonActionButton>
  )
}
