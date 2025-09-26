import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='*' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
