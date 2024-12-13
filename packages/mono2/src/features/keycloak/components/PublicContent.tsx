import React, {FC} from 'react'

interface PublicContentProps {
  children?: React.ReactNode
}

export const PublicContent: FC<PublicContentProps> = (props) => {
  const {children} = props
  return <div>{children}</div>
}
