import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskadd from './components/Taskadd'
import Taskui from './components/Taskui'
import MouseEvent from './components/MouseEvent'
import KeyEvents from './components/KeyEvents'

function App() {
  const [arr , setArr] = useState([])
  return (
    <>
      {/* <Taskadd arr={arr} setArr={setArr}/>
      {arr.map((task,index) => (
          <Taskui key={index} index={index} task={task}/>
      ))} */}
     <MouseEvent/>
     <KeyEvents/>
    </>
  )
}

export default App
