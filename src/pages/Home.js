import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate =  useNavigate()
  return (
    <div> 
        <p>This is the Home page</p>
        <button onClick={()=> navigate('order-summary')}>place order</button>
    </div>
  )
}
