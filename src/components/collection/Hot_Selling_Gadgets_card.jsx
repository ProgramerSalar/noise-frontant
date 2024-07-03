import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Testimonials from "../Testimonials";
import Navbar from "../NavBar";

const Hot_Selling_Gadgets_card = (i) => {
  console.log("i", i);
  return (
    <Link to={`/product-details/${i.id}`}>
      <div className="product-collection-details">
        <div className="product-image">
          <a href="/product-details">
            <img src={i.image} alt="" />
          </a>
        </div>

        <div className="product-details">
          <h3>{i.name}</h3>
          <p style={{
             overflow:"hidden",
             "textOverflow":"ellipsis",
             "whiteSpace":"nowrap",
             "maxWidth":"200px"
          }}>{i.desc}</p>

          <div className="color-rating">
            <div className="product-color">
              <p className="color1">{i["watch_color"][0]["color1"]}</p>
              <p></p>
              <p className="color2">{i["watch_color"][0]["color2"]}</p>
              <p></p>
              <p className="color3">{i["watch_color"][0]["color3"]}</p>
              <p></p>
              <p className="extra-color">
                {i["watch_color"][0]["extra_color"]}
              </p>
            </div>
            <div className="rating">
              <FaStar />
              <p>{i.star}</p>
            </div>
          </div>

          <div className="price">
            <p className="real-price">{i.price}</p>
            <p className="old-price">
              <s>{i["old-price"]}</s>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hot_Selling_Gadgets_card;
