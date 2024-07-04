import React from 'react'
import { useCartContext } from '../../context/Cart_Context'

const CheckoutCart = () => {


  const {cart} = useCartContext()
  console.log("id", cart.id)
  // console.log("id", id)
  return (
    <div>CheckoutCart</div>
  )
}

export default CheckoutCart