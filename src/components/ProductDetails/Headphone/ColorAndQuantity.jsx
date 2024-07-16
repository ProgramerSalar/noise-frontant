import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorAndQuantity = ({
    colortype,
    default_color_type,
    color_Type,
    handleImageClick,
    setDescreased,
    setIncreased,
    amount,
    addtoCart,
    id,
    setColor,
    setColorTextName,
    color,
    product
}) => {
    const [isColorSelected, setIsColorSelected] = useState(false);
    

    return (
        <div className="color-and-buy-container-section">
            <div className="color-tag">
                <p>Color:</p>
                <span>{colortype ? colortype : default_color_type}</span>
            </div>

            <div className="buy-and-color-container">
                {color_Type.map((i, index) => (
                    <div
                        className="color-container"
                        key={index}
                        onClick={() => {
                            handleImageClick(i["color_type"]);
                            setIsColorSelected(true); // Set color selection flag
                        }}
                    >
                        <div className="image-of-product" onClick={() => setColor(i["image"])} key={index}>
                            <img onClick={() => setColorTextName(i["color_type"])} src={i.image} alt="" />
                        </div>
                    </div>
                ))}
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
                            if (!isColorSelected) {
                                e.preventDefault(); // Prevent navigation if color is not selected
                                // alert("please select a color before buying")
                                toast.error("Please select a color before buying");
                            } else {
                                addtoCart(id, color, amount, product);
                            }
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
