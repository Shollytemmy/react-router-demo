import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate =  useNavigate()
  return (
    <div className='container'> 
        <p>This is the Home page</p>
        <button onClick={()=> navigate('order-summary', {replace: true})}>place order</button>
    </div>
  )
}
