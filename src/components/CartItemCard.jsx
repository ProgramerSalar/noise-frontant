import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import CartAmountToogle from "./CartAmountToogle";
import { useCartContext } from "../context/Cart_Context";

const CartItemCard = ({name, colorImage, price, old_price, id, amount, colorTextName }) => {
  // console.log("i", i);
  console.log(name)
  
  // console.log("id", i)

  const { removeItem, setDecrease, setIncrement } = useCartContext();

  // const [amount, setAmount] = useState(1);
  // console.log(amount)
  // // console.log(i.price)

  // // Calculate the total amount based on the quantity and price
  const totalAmount = amount * price;
  // const id = i.id


  
  

  return (
    <div className="cart-item-card-container-section">
      <div className="cart-item-image-section">
        <img src={colorImage} alt="" className="cart-image-section" />
      </div>
      <div className="cart-item-contant-section">
        <div className="contant-details-section-like-name">
          <h5 className="cart-item-name">{name}</h5>
          <div className="price-old-price-off-section">
            <p className="cart-item-price-section">₹{price}</p>
            <p className="cart-item-old-price-section">
              <s>₹{old_price}</s>
            </p>
            <p className="price-percantage-off">72% oFF</p>
          </div>

          <div>
            <CartAmountToogle
            setDescreased={() => setDecrease(id)}
            setIncreased={() => setIncrement(id)}
            amount={amount}
            />
          </div>
        </div>

        <div className="remove-container-section">
          
          <a href="" onClick={() => removeItem(id)}>
          <FaRegTrashAlt className="cart-dash-svg" />

          </a>
          
          <span>{colorTextName}</span>
          <span>
          ₹{totalAmount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
