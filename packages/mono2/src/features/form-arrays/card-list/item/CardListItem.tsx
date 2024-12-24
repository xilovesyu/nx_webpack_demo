import {ComponentClass, FC, PropsWithChildren, useCallback, useEffect, useReducer} from 'react'
import cn from 'classnames'
import {CancelButton, DeleteButton, EditButton, ConfirmButton} from '../action-buttons'
import {Mode} from '../../types'
import './CardListItem.less'
import {useDisabledHook, useHiddenHook} from '../../hooks'
import {CardListActionButtonProps} from '../CardList'

export const ModeEnum = {
  edit: 'edit' as Mode,
  display: 'display' as Mode,
  null: null as Mode
}

type ActionRenderProps<T extends object> = {
  currentValue?: T
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
    ContentRenderer?: FC<CardListItemProps<T>> | ComponentClass<CardListItemProps<T>>
    ActionRender?: FC<ActionRenderProps<T>> | ComponentClass<ActionRenderProps<T>>
    confirmButtonProps?: CardListActionButtonProps<T>
    cancelButtonProps?: CardListActionButtonProps<T>
  }
  displayConfig?: {
    showContent?: boolean
    showAction?: boolean
    ContentRenderer?: FC<CardListItemProps<T>> | ComponentClass<CardListItemProps<T>>
    ActionRender?: FC<ActionRenderProps<T>> | ComponentClass<ActionRenderProps<T>>
    editButtonProps?: CardListActionButtonProps<T>
    deleteButtonProps?: CardListActionButtonProps<T>
  }
} & Omit<Partial<ActionRenderProps<T>>, 'mode'>

export const CardListItem = <T extends object>(props: PropsWithChildren<CardListItemProps<T>>) => {
  const {
    currentValue,
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

  const confirmDisabled = useDisabledHook(confirmButtonProps?.disabled, currentValue)
  const confirmHidden = useHiddenHook(confirmButtonProps?.hidden, currentValue)

  const cancelDisabled = useDisabledHook(cancelButtonProps?.disabled, currentValue)
  const cancelHidden = useHiddenHook(cancelButtonProps?.hidden, currentValue)

  const deleteDisabled = useDisabledHook(deleteButtonProps?.disabled, currentValue)
  const deleteHidden = useHiddenHook(deleteButtonProps?.hidden, currentValue)

  const editDisabled = useDisabledHook(editButtonProps?.disabled, currentValue)
  const editHidden = useHiddenHook(editButtonProps?.hidden, currentValue)

  const {mode} = modeState
  return (
    <div className={cn('card-list-item', className)}>
      {mode === ModeEnum.edit ? (
        <div className={'edit-view'}>
          <div className='edit-content'>
            {showEditContent && EditContentRenderer ? <EditContentRenderer {...props} /> : null}
          </div>
          <div className='edit-action'>
            {showEditAction ? (
              EditActionRender ? (
                <EditActionRender
                  currentValue={currentValue}
                  mode={mode}
                  editCard={editCard}
                  removeCard={removeCard}
                  confirmCard={confirmCard}
                  cancelCard={cancelCard}
                />
              ) : (
                <div className='edit-action__default-actions'>
                  {!confirmHidden ? (
                    <ConfirmButton
                      {...(confirmButtonProps ?? {})}
                      buttonProps={{
                        ...(confirmButtonProps?.buttonProps ?? {}),
                        disabled: confirmDisabled
                      }}
                      onClick={confirmCard}
                    />
                  ) : null}
                  {!cancelHidden ? (
                    <CancelButton
                      {...(cancelButtonProps ?? {})}
                      buttonProps={{
                        ...(cancelButtonProps?.buttonProps ?? {}),
                        disabled: cancelDisabled
                      }}
                      onClick={cancelCard}
                    />
                  ) : null}
                </div>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {mode === ModeEnum.display ? (
        <div className={'display-view'}>
          <div className={'display-content'}>
            {showDisplayContent && DisplayContentRenderer ? <DisplayContentRenderer {...props} /> : null}
          </div>
          <div className='display-action'>
            {showDisplayAction ? (
              DisplayActionRender ? (
                <DisplayActionRender
                  currentValue={currentValue}
                  mode={mode}
                  editCard={editCard}
                  removeCard={removeCard}
                  confirmCard={confirmCard}
                  cancelCard={cancelCard}
                />
              ) : (
                <div className='display-action__default-actions'>
                  {!editHidden ? (
                    <EditButton
                      {...(editButtonProps ?? {})}
                      buttonProps={{
                        ...(editButtonProps?.buttonProps ?? {}),
                        disabled: editDisabled
                      }}
                      onClick={editCard}
                    />
                  ) : null}
                  {!deleteHidden ? (
                    <DeleteButton
                      {...(deleteButtonProps ?? {})}
                      buttonProps={{
                        ...(deleteButtonProps?.buttonProps ?? {}),
                        disabled: deleteDisabled
                      }}
                      onClick={removeCard}
                    />
                  ) : null}
                </div>
              )
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
