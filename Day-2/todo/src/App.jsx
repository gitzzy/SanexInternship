import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskadd from './components/Taskadd'
import Taskui from './components/Taskui'

function App() {
  const [arr , setArr] = useState([])
  return (
    <>
      <Taskadd arr={arr} setArr={setArr}/>
      {arr.map((task,index) => (
          <Taskui key={index} index={index} task={task}/>
      ))}
     
    </>
  )
}

export default App
