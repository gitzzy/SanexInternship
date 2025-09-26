import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <nav className='nav'>
        <Link to='/Contact'>Contact</Link>
        <Link to='/dynamic/name'>Dynamic</Link>
        <button onClick={() => navigate('/navi')}>Navigate</button>
        <Link to='/location' >Location</Link>
        <Link to='/lazy'>LazyLoading</Link>
      </nav>
    </div>
  )
}
