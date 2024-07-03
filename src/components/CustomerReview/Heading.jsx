import React from "react";
import { FaStar } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";

const Heading = () => {
  return (
    <div className="heading-main-container">
      <h2>Customer Reviews</h2>

      <div className="reating-heading-container">
        <div className="first-section">
          <div className="start-section">
            <FaStar  className="full"/>
            <FaStar  className="full"/>
            <FaStar  className="full"/>
            <FaStar  className="full"/>
            <FaStar  className="full"/>
            
          </div>
          <div className="start-section-name">
            <span>Based on 26 reviews</span>
          </div>
        </div>

        <div className="second-section">
          <div className="star-section">
            <div className="five-row-rating">
              <div className="five-star-section">
                <FaStar  className="full"/>
                <FaStar  className="full"/>
                <FaStar  className="full"/>
                <FaStar  className="full"/>
                <FaStar  className="full"/>
                
              </div>
              <div className="bar-section">
                <div className="five-star-white-row">
                  <div className="five-star-green-row"></div>
                </div>
              </div>
              <div className="percantage-rating">
                <p>80%</p>
              </div>
              <div className="num-of-people-rated">
                <p>(200)</p>
              </div>
            </div>
            <div className="four-row-rating">
              <div className="four-star-section">
                <FaStar className="rating-one" />
                <FaStar className="rating-two"/>
                <FaStar className="rating-three"/>
                <FaStar className="rating-four"/>
                <FaStar className="rating-five"/>
              </div>
              <div className="bar-section">
              <div className="four-star-white-row">
                  <div className="five-star-green-row"></div>
                </div>
              </div>
              <div className="percantage-rating">
                <p>50%</p>
              </div>
              <div className="num-of-people-rated">
                <p>(50)</p>
              </div>
            </div>
            <div className="three-row-rating">
              <div className="three-star-section">
              <FaStar className="rating-one" />
                <FaStar className="rating-two"/>
                <FaStar className="rating-three"/>
                <FaStar className="rating-four"/>
                <FaStar className="rating-five"/>
              </div>
              <div className="bar-section">
              <div className="three-star-white-row">
                  <div className="three-star-green-row"></div>
                </div>
              </div>
              <div className="percantage-rating">
                <p>20%</p>
              </div>
              <div className="num-of-people-rated">
                <p>(2)</p>
              </div>
            </div>
            <div className="two-row-rating">
              <div className="two-star-section">
              <FaStar className="rating-one" />
                <FaStar className="rating-two"/>
                <FaStar className="rating-three"/>
                <FaStar className="rating-four"/>
                <FaStar className="rating-five"/>
              </div>
              <div className="bar-section"></div>
              <div className="percantage-rating">
                <p>0%</p>
              </div>
              <div className="num-of-people-rated">
                <p>(0)</p>
              </div>
            </div>
            <div className="one-row-rating">
              <div className="one-star-section">
              <FaStar className="rating-one" />
                <FaStar className="rating-two"/>
                <FaStar className="rating-three"/>
                <FaStar className="rating-four"/>
                <FaStar className="rating-five"/>
              </div>
              <div className="bar-section"></div>
              <div className="percantage-rating">
                <p>0%</p>
              </div>
              <div className="num-of-people-rated">
                <p>(0)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-section">
          <input type="search" placeholder="Search reviews" />
          <button>Write a review</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
