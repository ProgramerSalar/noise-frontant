import React from 'react'
import Navbar from '../NavBar'
import Data from "../../assets/data/offer.json"
import Testimonials from '../Testimonials'


const Offer = () => {
  return (

    <div className="main-container">

      {/* navbar  */}
      <div>
        <Navbar />
      </div>


      <div className="offer-container">


        <div className="image-container">
          <img src="src\assets\offer\twenty-one.png" alt="" />
        </div>

        <div className="timer">
          <div className="sale-time">
            <p>S A L E</p>
            <p>E N D S</p>
            <p>I N</p>
          </div>

          <div className="timer-one-hour">
            <div>
              <p className='first'>1</p>
              <p className='second'>HOURS</p>
            </div>
            <div>
              <p className='first'>30</p>
              <p className='second'>MINUTES</p>
            </div>
            <div>
              <p className='first'>30</p>
              <p className='second'>SECONDS</p>
            </div>





          </div>




          <div className="icons">
            <a href="">
              <img src="src\assets\offer\twenty-two.png" alt="" />
              <p>Bestseller</p>
            </a>
            <a href="">
              <img src="src\assets\offer\twenty-four.png" alt="" />
              <p>Smartwatch <br /> deals</p>
            </a>
            <a href="">
              <img src="src\assets\offer\twenty-three.png" alt="" />
              <p>Audio Deals</p>
            </a>
          </div>

          
        </div>


        {/* better than dad jokes deals  */}


        <div>
          <div className="heading-image">
            <img src="src\assets\offer\eighteen.png" alt="" />
          </div>

          {/* offer -1  */}
          <div className="better-deals-1">
            {
              Data.offer1.map((i) => (

                <div className="col-1">
                  <div className="offer-image">
                    <img className='offer-image-tag' src={i['offer-image']} alt="" />
                  </div>

                  <div className="product">
                    <img className='product-image' src={i.image} alt="" />
                    <h4>{i.name}</h4>
                    <p>{i.desc}</p>
                    <div className="price">
                      <p><s>{i['old-price']}</s></p>
                      <p>{i['price-off']}</p>
                    </div>
                    <button>{i.price}</button>
                  </div>

                </div>
              ))
            }

          </div>
        </div>




        {/* offer -2  */}


        <div>
          <div className="heading-image">
            <img src="src\assets\offer\ninteen.png" alt="" />
          </div>

          {/* offer -1  */}
          <div className="better-deals-1">
            {
              Data.offer2.map((i) => (

                <div className="col-1">
                  <div className="offer-image">
                    <img className='offer-image-tag' src={i['offer-image']} alt="" />
                  </div>

                  <div className="product">
                    <img className='product-image' src={i.image} alt="" />
                    <h4>{i.name}</h4>
                    <p>{i.desc}</p>
                    <div className="price">
                      <p><s>{i['old-price']}</s></p>
                      <p>{i['price-off']}</p>
                    </div>
                    <button>{i.price}</button>
                  </div>

                </div>
              ))
            }

          </div>
        </div>


        {/* offer -3  */}

        <div>
          <div className="heading-image">
            <img src="src\assets\offer\twenty.png" alt="" />
          </div>

          {/* offer -1  */}
          <div className="better-deals-1">
            {
              Data.offer3.map((i) => (

                <div className="col-1">
                  <div className="offer-image">
                    <img className='offer-image-tag' src={i['offer-image']} alt="" />
                  </div>

                  <div className="product">
                    <img className='product-image' src={i.image} alt="" />
                    <h4>{i.name}</h4>
                    <p>{i.desc}</p>
                    <div className="price">
                      <p><s>{i['old-price']}</s></p>
                      <p>{i['price-off']}</p>
                    </div>
                    <button>{i.price}</button>
                  </div>

                </div>
              ))
            }

          </div>
        </div>







      </div>

      {/* Testimonials */}

      <div>
        <Testimonials />
      </div>
    </div>
  )
}

export default Offer