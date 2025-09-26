import React, { useEffect, useState } from 'react'

export default function EffectExp() {
    const [count , setCount] = useState(0) 
    const handleCount = () => {setCount(count+1)}

    useEffect(() => {
        console.log('Use Effect 1')
        return () => {
            console.log('useEffect1')
        }
    })

    useEffect(() => {
        console.log('Use Effect 2')
    },[])

    useEffect(() => {
        console.log('Use Effect 3')
    },[count])

  return (
    <div>
      <h1>Count :{count}</h1>
      <div><button onClick={handleCount}>+</button></div>
    </div>
  )
}
