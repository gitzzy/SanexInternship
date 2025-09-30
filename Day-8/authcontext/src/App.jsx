import { useEffect, useState } from 'react'
import './App.css'
import {userContext} from './components/UserContext'
import Home from './components/Home'

function App() {
  const [user,setUser] = useState(null)
  
  const Login = () =>{
    const newUser = 'Devansh';
  setUser(newUser);
    localStorage.setItem('user',newUser)
  }

  const Logout = () =>{
     setUser(null)
     localStorage.removeItem('user')
  }

  useEffect(() => {
        const suser = localStorage.getItem('user')
        if(suser) setUser(suser)
    },[])
   

  return (
    <>
    <userContext.Provider value={{user,Login,Logout}}>
      <Home/>
    </userContext.Provider>
    </>
  )
}

export default App
