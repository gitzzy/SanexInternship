import React from 'react'

export default function Taskui({index,task}) {
  return (
    <div>
      <div>{index}. {task} <button>🗑️</button></div>

    </div>
  )
}
