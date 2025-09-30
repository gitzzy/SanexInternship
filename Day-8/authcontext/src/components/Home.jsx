import React, { useContext, useState } from 'react'
import {userContext} from './UserContext'
 
export default function Home() {
    const {user,Login,Logout} = useContext(userContext);

  return (
    <div>
        {user ? `You are logged in` : `Plz login`}<br></br>
      Home {user}<br/>
      <button onClick={Login}>Login</button>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}
