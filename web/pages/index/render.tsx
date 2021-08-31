import React, { FC } from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
interface IndexProps {
  title?: string
}

const Index: FC<IndexProps> = (props) => {
  const uploadProps = {
    name: 'file',
    action: '/api/medias',
    accept: '.doc,.docx,image/*,video/*',
    headers: {},
    onChange(info: any) {
      console.log('info', info)
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        if (info.response) {
          message.error(info.response)
        } else {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    },
  }

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
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  )
}

// ;(Index as any).getLayout = (page: any) => <div>{page}</div>

export default Index
