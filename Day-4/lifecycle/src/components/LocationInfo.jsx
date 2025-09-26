import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LocationInfo() {
    const info  = useLocation()
  return (
    <div>
      <p>Current path: {location.pathname}</p>
    </div>
  )
}
