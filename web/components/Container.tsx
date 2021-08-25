import React from 'react'
import type { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = (props) => {
  return <div className="bg-white dark:bg-black">{props.children}</div>
}

export default Container
