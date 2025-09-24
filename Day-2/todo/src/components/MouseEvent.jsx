import React from 'react'

export default function MouseEvent() {
    const handleClick = () => {
        console.log('Single Clicked')
    }
    const handleDoubleClick = () => {
        console.log('Double Clicked')
    }
    const handleMouseOver = () => {
        console.log('Mouse Over')
    }
    const handleMouseOut = () => {
        console.log('Mouse Out')
    }
  return (
    <div >
      <button onClick={handleClick}>Single Click</button>
      <button onDoubleClick={handleDoubleClick}>Double click</button>
      <button onMouseOver={handleMouseOver}>Mouse Over</button>
      <button onMouseOut={handleMouseOut}>Mouse out</button>
    </div>
  )
}
