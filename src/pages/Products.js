import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
    <div>
         <input type="search" name="" id="" />

    </div>
       





        <nav className='nav__list'>
            <NavLink to='featured' >Featured</NavLink>
            <NavLink to='new' >New</NavLink>
        </nav>



        <Outlet />



    </>
  )
}
