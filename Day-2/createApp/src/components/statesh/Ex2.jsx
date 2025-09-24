import React, { useState } from 'react'

export default function Ex2() {

    const [count,setCount] = useState(0)
    const handleCount = () => {
        setCount(count+1)
    } 

  return (
    <div>
      <h1>Example of states</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>+</button>
    </div>
  )
}
