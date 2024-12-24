import {
  ComponentClass,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useReducer
} from 'react'
import cn from 'classnames'
import {
  CancelButton,
  DeleteButton,
  EditButton,
  ConfirmButton
} from '../action-buttons'
import {Mode} from '../../types'
import {CommonActionButtonProps} from '../action-buttons/component/CommonActionButton'
import './CardListItem.less'

export const ModeEnum = {
  edit: 'edit' as Mode,
  display: 'display' as Mode,
  null: null as Mode
}

type ActionRenderProps = {
  mode: Mode
  editCard: () => void
  removeCard: () => void
  confirmCard: () => void
  cancelCard: () => void
}

export type CardListItemProps<T extends object> = {
  currentValue?: T
  className?: string
  mode?: Mode
  defaultMode?: Mode
  editConfig?: {
    showContent?: boolean
    showAction?: boolean
    ContentRenderer?:
      | FC<CardListItemProps<T>>
      | ComponentClass<CardListItemProps<T>>
    ActionRender?: FC<ActionRenderProps> | ComponentClass<ActionRenderProps>
    confirmButtonProps?: Partial<CommonActionButtonProps>
    cancelButtonProps?: Partial<CommonActionButtonProps>
  }
  displayConfig?: {
    showContent?: boolean
    showAction?: boolean
    ContentRenderer?:
      | FC<CardListItemProps<T>>
      | ComponentClass<CardListItemProps<T>>
    ActionRender?: FC<ActionRenderProps> | ComponentClass<ActionRenderProps>
    editButtonProps?: Partial<CommonActionButtonProps>
    deleteButtonProps?: Partial<CommonActionButtonProps>
  }
} & Omit<Partial<ActionRenderProps>, 'mode'>

export const CardListItem = <T extends object>(
  props: PropsWithChildren<CardListItemProps<T>>
) => {
  const {
    editConfig,
    displayConfig,
    mode: modeFromProps,
    defaultMode,
    className,
    editCard: editCardCallback,
    removeCard: removeCardCallback,
    confirmCard: confirmCardCallback,
    cancelCard: cancelCardCallback
  } = props
  const {
    ContentRenderer: EditContentRenderer,
    ActionRender: EditActionRender,
    showContent: showEditContent = true,
    showAction: showEditAction = true,
    confirmButtonProps,
    cancelButtonProps
  } = editConfig ?? {}
  const {
    ContentRenderer: DisplayContentRenderer,
    ActionRender: DisplayActionRender,
    showContent: showDisplayContent = true,
    showAction: showDisplayAction = true,
    editButtonProps,
    deleteButtonProps
  } = displayConfig ?? {}
  const [modeState, dispatchModeState] = useReducer(
    (state: {mode: Mode}, action: {type: 'change'; payload: Mode}) => {
      switch (action.type) {
        case 'change':
          return {mode: action.payload}
        default:
          return {mode: state.mode}
      }
    },
    {mode: defaultMode ?? null}
  )

  useEffect(() => {
    const newMode = modeFromProps ?? defaultMode
    if (newMode !== modeState.mode && newMode) {
      dispatchModeState({type: 'change', payload: newMode})
    }
  }, [modeFromProps, defaultMode])

  const editCard = useCallback(() => {
    dispatchModeState({type: 'change', payload: 'edit'})
    editCardCallback?.()
  }, [editCardCallback])
  const removeCard = useCallback(() => {
    dispatchModeState({type: 'change', payload: null})
    removeCardCallback?.()
  }, [removeCardCallback])
  const confirmCard = useCallback(() => {
    dispatchModeState({type: 'change', payload: 'display'})
    confirmCardCallback?.()
  }, [confirmCardCallback])

  const cancelCard = useCallback(() => {
    dispatchModeState({type: 'change', payload: 'display'})
    cancelCardCallback?.()
  }, [cancelCardCallback])

  const {mode} = modeState
  return (
    <div className={cn('card-list-item', className)}>
      {mode === ModeEnum.edit ? (
        <div className={'edit-view'}>
          <div className='edit-content'>
            {showEditContent && EditContentRenderer ? (
              <EditContentRenderer {...props} />
            ) : null}
          </div>
          <div className='edit-action'>
            {showEditAction ? (
              EditActionRender ? (
                <EditActionRender
                  mode={mode}
                  editCard={editCard}
                  removeCard={removeCard}
                  confirmCard={confirmCard}
                  cancelCard={cancelCard}
                />
              ) : (
                <div className='edit-action__default-actions'>
                  <ConfirmButton
                    {...(confirmButtonProps ?? {})}
                    onClick={confirmCard}
                  />
                  <CancelButton
                    {...(cancelButtonProps ?? {})}
                    onClick={cancelCard}
                  />
                </div>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {mode === ModeEnum.display ? (
        <div className={'display-view'}>
          <div className={'display-content'}>
            {showDisplayContent && DisplayContentRenderer ? (
              <DisplayContentRenderer {...props} />
            ) : null}
          </div>
          <div className='display-action'>
            {showDisplayAction ? (
              DisplayActionRender ? (
                <DisplayActionRender
                  mode={mode}
                  editCard={editCard}
                  removeCard={removeCard}
                  confirmCard={confirmCard}
                  cancelCard={cancelCard}
                />
              ) : (
                <div className='display-action__default-actions'>
                  <EditButton {...(editButtonProps ?? {})} onClick={editCard} />
                  <DeleteButton
                    {...(deleteButtonProps ?? {})}
                    onClick={removeCard}
                  />
                </div>
              )
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
