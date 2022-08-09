import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div> 
        <p>Order Confirmed you can proceed to checkout</p>
        <button onClick={() => navigate(-1)}>Go back</button>
       
    </div>
  )
}
