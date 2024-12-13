import {Button} from 'antd'
import {FC} from 'react'
import {useThemeContext} from '../hook'

interface TestPageProps {
  children?: React.ReactNode
}

export const TestPage: FC<TestPageProps> = () => {
  const {changeToDark, changeToLight} = useThemeContext()
  return (
    <div>
      <Button onClick={changeToDark}>Change to dark</Button>
      <Button onClick={changeToLight}>Change to light</Button>
    </div>
  )
}
