import {forwardRef, Ref, useImperativeHandle} from 'react'
import cn from 'classnames'
import {CardListItem, CardListItemProps} from './item/CardListItem'
import {getFieldUniqKey} from '../utils/getFieldUniqKey'
import {
  EditItemsReducerState,
  useArrayComponentHook
} from '../hooks/useArrayComponentHook'
import {defaultFieldKey} from '../constant'
import {AddButton} from './action-buttons'
import {EditItemProps} from '../types'
import './CardList.less'

export type ArrayActionProps<T extends object> = {
  onAdd: () => T
  onEdit: (field: T) => void
  onRemove: (field: T) => void
  onConfirm: (field: T) => void
  onCancel: (currentField: T | null, previousField: T | null) => void
}

type CardListProps<T extends object> = {
  className?: string
  /**
   * fields 数据数组
   */
  fields: T[]
  /***
   * field 的唯一标识字段名称，默认是id
   */
  fieldKey?: keyof T

  cardItemProps?: CardListItemProps<T>

  childrenBefore?: React.ReactNode
  childrenAfter?: React.ReactNode
} & ArrayActionProps<T>

export type CardListRef<T extends object> = {
  addCard: () => void
  removeCard: (field: T) => void
  editCard: (field: T) => void
  confirmCard: (field: T) => void
  cancelCard: (currentField: T, editItem: EditItemProps<T> | null) => void
}

export const CardListComponent = <T extends object>(
  props: CardListProps<T>,
  ref: Ref<CardListRef<T>>
) => {
  const {
    className,
    fields,
    fieldKey = defaultFieldKey,
    onAdd,
    onRemove,
    onEdit,
    onConfirm,
    onCancel,
    cardItemProps = {},
    childrenBefore,
    childrenAfter
  } = props

  useImperativeHandle(ref, () => {
    return {
      addCard,
      removeCard,
      editCard,
      confirmCard,
      cancelCard
    }
  })

  const findCurrentEditItem = (
    editItems: EditItemsReducerState<T>,
    item: T
  ) => {
    const editItemKey = getFieldUniqKey(item, fieldKey)
    const editItemIndex = editItems.findIndex((item) => {
      return getFieldUniqKey(item.current, fieldKey) === editItemKey
    })
    return editItemIndex >= 0 ? editItems[editItemIndex] : null
  }

  const {editItems, editCard, cancelCard, removeCard, confirmCard, addCard} =
    useArrayComponentHook(fieldKey, {
      onAdd,
      onEdit,
      onRemove,
      onConfirm,
      onCancel
    })
  return (
    <div className={cn('card-list', className)}>
      {childrenBefore}
      <div className={'card-list__add-button'}>
        <AddButton onClick={addCard} />
      </div>
      <div className='card-list__items'>
        {fields?.map((field) => {
          const currentEditItem = findCurrentEditItem(editItems, field)
          return (
            <div
              key={getFieldUniqKey(field, fieldKey)}
              className={cn('card-list--item')}
            >
              <CardListItem
                {...cardItemProps}
                currentValue={field}
                mode={currentEditItem ? 'edit' : 'display'}
                editCard={() => editCard(field)}
                removeCard={() => removeCard(field)}
                confirmCard={() => confirmCard(field)}
                cancelCard={() => cancelCard(field, currentEditItem)}
              />
            </div>
          )
        })}
      </div>
      {childrenAfter}
    </div>
  )
}

CardListComponent.displayName = 'CardListComponent'

export const CardList = forwardRef(CardListComponent) as <T extends object>(
  p: CardListProps<T> & {ref?: Ref<CardListRef<T>>}
) => React.ReactElement
