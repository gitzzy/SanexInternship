import React from 'react'

export default function KeyEvents() {
  const handleKeyDown = (e) => console.log("Key down:", e.key);
  const handleKeyUp = (e) => console.log("Key up:", e.key);
  const handleKeyPress = (e) => console.log("Key press:", e.key);
  return (
    <div>
      <input type='text' 
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ></input>
    </div>
  )
}
