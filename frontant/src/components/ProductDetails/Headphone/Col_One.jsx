import React from "react";
import { FaStar } from "react-icons/fa";

const Col_One = ({ name, desc, price, old_price, rating, rating_count }) => {
  return (
    <div className="product-detaiils-card-section-container">
      <div className="product-details-card-header">
        <div className="product-name">
          <h1>{name}</h1>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>

        <div className="product-details-card-body">
          <div className="price">
            <p className="price">₹{price}</p>
            <p className="old-price">
              <s>₹{old_price}</s>
            </p>
          </div>

          <div className="rating">
            <FaStar />
            <p className="rating">{rating}</p>
            <p className="rating-count">{rating_count}</p>
          </div>
        </div>
        <h5 className="include-all-tax-text">Includes of all taxes</h5>
      </div>
    </div>
  );
};

export default Col_One;
