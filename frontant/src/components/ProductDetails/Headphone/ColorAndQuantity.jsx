import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorAndQuantity = ({
    
    color_Type,
    setDescreased,
    setIncreased,
    amount,
    addtoCart,
    id,
    color,
    product
}) => {
    console.log("colorTypes", color)
    
    

    return (
        <div className="color-and-buy-container-section">
            <div className="color-tag">
                <p>Color:</p>
                <span>{color_Type.map((i) => i.color_type)}</span>
            </div>

           

            <div className="quntity-and-buy-container">
                <h2>Quantity</h2>
                <div className="quantity-buy-section">
                    <div className="quantity">
                        <button onClick={() => setDescreased()}>-</button>
                        <span>{amount}</span>
                        <button onClick={() => setIncreased()}>+</button>
                    </div>
                    <div className="buy-container">
                        <NavLink to="/add-to-cart-noise" onClick={(e) => {
                                addtoCart(id, color, amount, product);
                            
                        }}>
                                <ToastContainer />

                            <button required>Buy Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorAndQuantity;
