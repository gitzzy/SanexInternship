import React from 'react'
import { useParams } from 'react-router-dom'

export default function DynamicRouting() {
    const {name} = useParams()
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}
