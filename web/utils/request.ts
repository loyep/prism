// import { message as AntMessage } from 'antd'
import axios, { Method } from 'axios'

const service = axios.create({
  withCredentials: true,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    // if (isBrowser) {
    //   const token = getCookie("token")
    //   if (token) config.headers["Authorization"] = `Bearer ${token}`
    // }
    return config
  },
  (error) => Promise.reject(error),
)

export default function request(options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const reqConf = options
    reqConf.method = (reqConf.method || 'GET').toUpperCase() as Method
    service(reqConf)
      .then((response) => {
        const { data, status } = response
        const { code, message } = data || {}
        switch (status) {
          case 401: {
            if (__isBrowser__) {
              // AntMessage.error(message || '未登录').then(() => {})
              location.href = `${location.protocol}//${location.host}${
                location.port ? ':' + location.port : ''
              }/login?redrect=${encodeURIComponent(location.href)}`
            }
            break
          }
          default: {
            const success = code === 0
            if (!success) {
              if (__isBrowser__) {
                // AntMessage.error(message).then(() => {})
              }
              reject(new Error(message))
            } else {
              resolve({
                success,
                ...data,
                message,
              })
            }
            break
          }
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
