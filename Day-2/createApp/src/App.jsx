import { useState } from 'react'
import './App.css'
import Ex1 from './components/propsh/ex1'
import Ex2 from './components/statesh/ex2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex1 name={'Devansh'}/>
      <Ex2/>
    </>
  )
}

export default App
