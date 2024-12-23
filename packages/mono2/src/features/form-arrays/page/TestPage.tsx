import {FC, useRef, useState} from 'react'
import {CardListItem, CardListItemProps} from '../card-list/item/CardListItem'
import {Button, Input} from 'antd'
import {CardList, CardListRef} from '../card-list/CardList'
import './index.less'
import {CheckSquareOutlined} from '@ant-design/icons'

interface TestPageProps {
  testId?: string
}

const ContentRenderer: FC = () => {
  return (
    <div>
      <Input />
    </div>
  )
}
const DisplayContentRenderer: FC = () => {
  return <div>DisplayContentRenderer</div>
}

const CardListContentRenderer = (
  props: CardListItemProps<{id: string; value: number | string}>
) => {
  const [value, setValue] = useState(props.currentValue?.value)
  return (
    <Input
      value={value}
      onChange={(e) => {
        setValue(e?.target?.value)
        if (props.currentValue) {
          props.currentValue.value = e?.target?.value
        }
      }}
    />
  )
}

const CardListDisplayContentRenderer = (
  props: CardListItemProps<{id: string; value: number | string}>
) => {
  return <div>{props.currentValue?.value ?? '-'}</div>
}

export const TestPage: FC<TestPageProps> = () => {
  const [list, setList] = useState<{id: string; value: number | string}[]>([])
  const [count, setCount] = useState(0)
  const cardListRef =
    useRef<CardListRef<{id: string; value: number | string}>>(null)
  return (
    <div>
      <div className='test-box'>
        CarList Item Demo
        <CardListItem
          defaultMode={'edit'}
          editConfig={{
            ContentRenderer: ContentRenderer
          }}
          displayConfig={{ContentRenderer: DisplayContentRenderer}}
        />
      </div>
      <div className='test-box'>
        Simple CardList Demo using state hook
        <CardList<{id: string; value: number | string}>
          ref={cardListRef}
          fields={list}
          cardItemProps={{
            editConfig: {
              ContentRenderer: CardListContentRenderer,
              confirmButtonProps: {
                Renderer: (props) => (
                  <Button {...props} icon={<CheckSquareOutlined />}>
                    Confirm
                  </Button>
                )
              }
            },
            displayConfig: {
              ContentRenderer: CardListDisplayContentRenderer,
              deleteButtonProps: {
                buttonProps: {
                  type: 'primary',
                  danger: true
                },
                children: 'Delete me'
              }
            }
          }}
          onAdd={() => {
            const newEntity = {id: `${count}`, value: count}
            setList((list) => [...list, newEntity])
            setCount((count) => count + 1)
            return newEntity
          }}
          onEdit={() => {
            //do nothing
          }}
          onRemove={(field) => {
            setList((list) => list.filter((item) => item.id !== field.id))
          }}
          onConfirm={() => {
            // do nothing
          }}
          onCancel={(current, previous) => {
            //if isNew, then delete it, otherwise cancel to previous
            if (previous === null && current) {
              setList((list) => list.filter((item) => item.id !== current.id))
            }
            if (previous && current) {
              setList((list) =>
                list.map((item) => (item.id === current.id ? previous : item))
              )
            }
          }}
        />
        <Button
          onClick={() => {
            cardListRef?.current?.addCard()
          }}
        >
          Add item by ref
        </Button>
      </div>
    </div>
  )
}
