import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EffectExp from './components/EffectExp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EffectExp/>
    </>
  )
}

export default App
