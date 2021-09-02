import { Button, useToast } from '@chakra-ui/react'
import React, { FC } from 'react'
interface IndexProps {
  title?: string
}

const Index: FC<IndexProps> = (props) => {
  const toast = useToast()

  return (
    <div className="container">
      <Button  onClick={() =>
              toast({
                title: '测试toast',
                position: 'top-right',
                isClosable: true,
              })
            }>测试</Button>
      {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xs:grid-cols-2">
        <div style={{ height: '300px', backgroundColor: '#eee'}}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
        <div style={{ height: '300px' }}>1</div>
      </div> */}
    </div>
  )
}

export default Index
