import React from 'react'
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const HotSellingProductCard = (i) => {
    return (

        <NavLink to={`/product-details/${i.id}`}>

            <div className="product-container">

                <div className="product-section" >
                    <div className="product-image">
                        <p className="image-heading">BEST VALUE</p>
                        <a href="#" >
                            <img  src={i.image} alt="" />
                        </a>
                    </div>
                    <div className="product-details" >
                        <h5 >{i.name}</h5>
                        <p className="product-descripation">{i.desc}</p>
                        <div className="product-color">
                            <p className="color1">{i["watch_color"][0]['color1']}</p>
                            <p></p>
                            <p className="color2">{i["watch_color"][0]['color2']}</p>
                            <p></p>
                            <p className="color3">{i["watch_color"][0]['color3']}</p>
                            <p></p>
                            <p className="extra-color">{i["watch_color"][0]['extra_color']}</p>


                        </div>
                        <div className="price-rating-container">
                            <div className="price">
                                <p className="real-price">₹{i.price}</p>
                                <p className="old-price">
                                    <s>
                                    ₹{i["old_price"]}
                                    </s>
                                </p>
                            </div>
                            <div className="rating">
                                <FaStar />
                                <p>{i.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </NavLink>


    )
}

export default HotSellingProductCard