import React, { useContext } from 'react'
import {userContext} from './ContextMethod'
export default function Parent() {
    // 5th get the value using useContext hook
    const {user} = useContext(userContext)
  return (
    <div>
      <h1>Hi {user}</h1>
    </div>
  )
}
