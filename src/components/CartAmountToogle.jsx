import React from 'react'

const CartAmountToogle = ({
    setDescreased,
    setIncreased,
    amount
}) => {
  return (
    <div className="increase-descrease-button">
    <button onClick={() => setDescreased()}>-</button>
    <p className="amount-section">{amount}</p>
    <button onClick={() => setIncreased()}>+</button>
  </div>
  )
}

export default CartAmountToogle