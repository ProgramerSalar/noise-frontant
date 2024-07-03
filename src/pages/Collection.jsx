import React from 'react'
import Data from "../assets/data/product.json"
import { FaStar } from 'react-icons/fa'
import Navbar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'



const Collection = () => {
  return (
    <div className="product-collection">

      <Navbar />

      <div className="heading">
        <h1>Bestseller Gadgets Available</h1>
      </div>

      <div className="filter-with-product-container">

        {/* filter section  */}
        <div className="filter-section">

          <div className="header-container">
            <h2>Filters:</h2>
            <a href="#">CLEAR ALL</a>
          </div>

          <div className="sort-section">
            <h3>Sort By</h3>
            <select name="" id="">
              <option value="">Featured</option>
              <option value="">Newest</option>
              <option value="">Price: Low to High</option>
              <option value="">Price: High to Low</option>
              <option value="">Customer Rating</option>
            </select>
          </div>



        </div>

        {/* product section  */}


        <div className="product-details-container">

          {
            Data.product.map((i) => (

              <Link to={"/product-details"}>
                <div className="product-collection-details">

                  <div className="product-image">
                    <a href="/product-details">
                      <img src={i.image} alt="" />
                    </a>
                  </div>

                  <div className="product-details">
                    <h3>{i.name}</h3>
                    <p>{i.desc}</p>

                    <div className="color-rating">
                      <div className="product-color">
                        <p className="color1">{i["watch-color"][0]['color1']}</p>
                        <p></p>
                        <p className="color2">{i["watch-color"][0]['color2']}</p>
                        <p></p>
                        <p className="color3">{i["watch-color"][0]['color3']}</p>
                        <p></p>
                        <p className="extra-color">{i["watch-color"][0]['extra-color']}</p>
                      </div>
                      <div className="rating">
                        <FaStar />
                        <p>{i.star}</p>
                      </div>
                    </div>

                    <div className="price">
                      <p className="real-price">{i.price}</p>
                      <p className="old-price">
                        <s>
                          {i["old-price"]}
                        </s>
                      </p>
                    </div>




                  </div>
                </div>

              </Link>
            ))
          }

        </div>
      </div>









      <div>
        <Testimonials />
      </div>



    </div>
  )
}

export default Collection