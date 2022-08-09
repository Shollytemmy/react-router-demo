import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyle = ({isActive}) => {
        return{
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'rgb(252, 137, 137)': '#fff',
            marginBottom:  isActive ? '5px' : 0
        }

    }

   
  return (
    <nav className='nav__links'>
        <NavLink to='/' style={navLinkStyle}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyle}>About</NavLink>
        <NavLink to='/products' style={navLinkStyle}>Product</NavLink>

    </nav>
  )
}
