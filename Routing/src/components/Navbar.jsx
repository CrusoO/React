import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link id='item' to='/'>Home</Link>
        </li>
        <li>
            <Link id='item' to='/about'>About</Link>
        </li>
        <li>
            <Link id='item' to='/help'>Help</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
