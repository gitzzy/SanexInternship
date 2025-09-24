import React from 'react'
import { useState } from 'react'

export default function Taskadd({arr,setArr}) {

    const [txt,setTxt] = useState('')
    const handleTask = () => {
        setArr([...arr,txt])
        setTxt('')
    }
  return (
    <div>
      <input type='text' value={txt} onChange={(e) => setTxt(e.target.value)}></input>
      <button onClick={handleTask}>Add</button>
    </div>
  )
}
