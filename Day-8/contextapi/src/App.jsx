import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//here is the userContext imported
import {userContext} from './components/ContextMethod'
import Parent from './components/Parent'

function App() {
  //2nd make the variable you want to use
  const [user, setUser] = useState('Devansh')

  return (
   <>
    {/* // 3rd  now make the context provider 
    // Make user to import userContext and use it*/}
    <userContext.Provider value={{user}}>
      {/* 4th now wrap the component you want to send the data */}
      <Parent/>
    </userContext.Provider>

   </>
  )
}

export default App
