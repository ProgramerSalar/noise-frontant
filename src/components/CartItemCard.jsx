import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import CartAmountToogle from "./CartAmountToogle";

const CartItemCard = ({ i }) => {
  // console.log("i", i);

  // const [amount, setAmount] = useState(1);
  // console.log("amount in cart card", amount)
  // const quantity = i.quantity;

  // const setDescreased = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(i.amount);
  // };

  // const setIncreased = () => {
  //   amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  // };


  // const totalAmount = amount * i.price 
  // console.log("totalAmount", totalAmount)

  const [amount, setAmount] = useState(1);
  // console.log(amount)
  // console.log(i.price)

  // Calculate the total amount based on the quantity and price
  const totalAmount = amount * i.price;


  // Decrease the amount (if greater than 1)
  const setDecreased = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      // If amount is already 1, set it to the initial quantity
      setAmount(i.quantity);
    }
  };

  // Increase the amount (if less than the available quantity)
  const setIncreased = () => {
    if (amount < i.quantity) {
      setAmount(amount + 1);
    } else {
      // If amount reaches the maximum quantity, keep it unchanged
      setAmount(i.quantity);
    }
  };
  

  return (
    <div className="cart-item-card-container-section">
      <div className="cart-item-image-section">
        <img src={i.colorImage} alt="" className="cart-image-section" />
      </div>
      <div className="cart-item-contant-section">
        <div className="contant-details-section-like-name">
          <h5 className="cart-item-name">{i.name}</h5>
          <div className="price-old-price-off-section">
            <p className="cart-item-price-section">{i.price}</p>
            <p className="cart-item-old-price-section">
              <s>{i.old_price}</s>
            </p>
            <p className="price-percantage-off">72% oFF</p>
          </div>

          <div>
            <CartAmountToogle
            setDescreased={setDecreased}
            setIncreased={setIncreased}
            amount={amount}
            />
          </div>
        </div>

        <div className="remove-container-section">
          
            <FaRegTrashAlt className="cart-dash-svg" />
          
          <span>{i.colorTextName}</span>
          <span>
            {totalAmount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
