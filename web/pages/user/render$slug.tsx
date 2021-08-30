import React, { FC, useContext, useMemo } from 'react'

interface UserProps {
  title?: string
  data: any
}

const User: FC<UserProps> = (props) => {
  const { state } = useContext(window.STORE_CONTEXT)
  const data = useMemo(() => {
    return state.user || {}
  }, [state.user])

  return <div>{data.name}</div>
}

// ;(Index as any).getLayout = (page: any) => <div>{page}</div>

export default User
