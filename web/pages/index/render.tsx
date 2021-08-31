import React, { FC } from 'react'

interface IndexProps {
  title?: string
}

const Index: FC<IndexProps> = (props) => {
  return (
    <div>
      <div className="p-6 m-16 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-900">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 text-black dark:text-white">test2</div>
        </div>
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

// ;(Index as any).getLayout = (page: any) => <div>{page}</div>

export default Index
