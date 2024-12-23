import {useCallback, useReducer} from 'react'
import {getFieldUniqKey} from '../utils/getFieldUniqKey'
import {EditItemProps, FieldKeyProp} from '../types'
import {cloneDeep} from 'lodash'
import {ArrayActionProps} from '../card-list/CardList'

export type EditItemsReducerState<T extends object> = EditItemProps<T>[]

export type EditItemsReducerAction<T extends object> = {
  type: 'add' | 'remove' | 'edit' | 'cancel' | 'confirm'
  current: T | null
  previous: T | null
}

export const useArrayComponentStateHook = <T extends object>(
  fieldKey: FieldKeyProp<T>
) => {
  const [editItems, dispatchEditItems] = useReducer<
    (
      state: EditItemsReducerState<T>,
      action: EditItemsReducerAction<T>
    ) => EditItemsReducerState<T>
  >((state, action) => {
    const newEditItem: EditItemProps<T> = {
      current: action.current,
      previous: action.previous
    }
    const editItemKey = getFieldUniqKey(newEditItem.current, fieldKey)

    switch (action.type) {
      case 'add':
        return [...state, newEditItem]
      case 'edit':
        const editItemIndex = state.findIndex((item) => {
          return getFieldUniqKey(item.current, fieldKey) === editItemKey
        })
        if (editItemIndex >= 0) {
          return state.map((item) => {
            if (editItemKey === getFieldUniqKey(item.current, fieldKey)) {
              return newEditItem
            }
            return item
          })
        } else {
          return [...state, newEditItem]
        }
      case 'cancel':
      case 'confirm':
      case 'remove':
        return state.filter((item) => {
          if (editItemKey === getFieldUniqKey(item.current, fieldKey)) {
            return false
          }
          return true
        })
      default:
        return state
    }
  }, [])

  return {
    editItems,
    dispatchEditItems
  }
}

export const useArrayComponentActionHook = <T extends object>({
  dispatchEditItems,
  actions
}: {
  dispatchEditItems: React.Dispatch<EditItemsReducerAction<T>>
  actions: ArrayActionProps<T>
}) => {
  const {onAdd, onCancel, onConfirm, onEdit, onRemove} = actions

  const addCard = useCallback(() => {
    const currentEditItem = onAdd()
    dispatchEditItems({
      type: 'add',
      current: currentEditItem,
      previous: null
    })
  }, [onAdd])
  const editCard = useCallback(
    (field: T) => {
      dispatchEditItems({
        type: 'edit',
        current: field,
        previous: cloneDeep(field)
      })
      onEdit(field)
    },
    [onEdit]
  )

  const removeCard = useCallback(
    (field: T) => {
      dispatchEditItems({
        type: 'remove',
        current: field,
        previous: null
      })
      onRemove(field)
    },
    [onRemove]
  )

  const confirmCard = useCallback(
    (field: T) => {
      dispatchEditItems({
        type: 'confirm',
        current: field,
        previous: null
      })
      onConfirm(field)
    },
    [onConfirm]
  )

  const cancelCard = useCallback(
    (field: T, currentEditItem: EditItemProps<T> | null) => {
      const {current, previous} = currentEditItem ?? {}
      dispatchEditItems({
        type: 'cancel',
        current: field,
        previous: null
      })
      if (current === undefined || previous === undefined) {
        console.error(
          `cancel action: current is ${current}, previous is ${previous}. These two should not be undefined`
        )
      } else {
        onCancel(current, previous)
      }
    },
    []
  )

  return {
    addCard,
    editCard,
    removeCard,
    confirmCard,
    cancelCard
  }
}

export const useArrayComponentHook = <T extends object>(
  fieldKey: FieldKeyProp<T>,
  actions: ArrayActionProps<T>
) => {
  const {editItems, dispatchEditItems} = useArrayComponentStateHook<T>(fieldKey)
  const {addCard, editCard, removeCard, confirmCard, cancelCard} =
    useArrayComponentActionHook<T>({
      dispatchEditItems,
      actions
    })

  return {
    editItems,
    dispatchEditItems,
    addCard,
    editCard,
    removeCard,
    confirmCard,
    cancelCard
  }
}
