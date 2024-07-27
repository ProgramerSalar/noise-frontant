
const defaultCarouselImages =
Data.product_details[0]["color-Type"][0]["Pitch Black"];
const [isCarouselOpen, setIsCarouselOpen] = useState(true);
const [carouselImages, setCarouselImages] = useState(defaultCarouselImages);

const handleImageClick = (colorType) => {
const selectedColorDetails = Data.product_details[0]["color-Type"].find(
  (color) => color["color-type"] === colorType
);
if (selectedColorDetails && selectedColorDetails[colorType]) {
  setCarouselImages(selectedColorDetails[colorType]);
  setIsCarouselOpen(true);
}
};
















<div className="product-container-section">


                {/* crousel image  */}

                {/* {isCarouselOpen && <CrouselProduct carouselImages={carouselImages}  />} */}
                {isCarouselOpen ? (<CrouselProduct carouselImages={carouselImages} />) : (<CrouselProduct />)}


                {/* <Col_One /> */}

                {
                    Data.product_details.map((item) => (
                        <div className="product-details-card-header">


                            <div className="product-name">
                                <h1>{item.name}</h1>
                                <h1>ID:{item.id}</h1>
                            </div>
                            <div className="description">
                                <p>{item.desc}</p>
                            </div>

                            <div className="product-details-card-body">
                                <div className="price">
                                    <p className="price">{item.price}</p>
                                    <p className="old-price"><s>${item["old-price"]}</s></p>
                                </div>

                                <div className="rating">
                                    <FaStar />
                                    <p className="rating">{item.rating}</p>
                                    <p className="rating-count">{item["rating-count"]}</p>
                                </div>
                            </div>
                            <h5 className="include-all-tax-text">Includes of all taxes</h5>



                        </div>
                    ))
                }


                {/* color and buy  */}



                <div className="color-and-buy-container-section">
                    {Data.product_details.map((item) => (
                        <div className="buy-and-color-container">
                            {item["color-Type"].map((i) => (
                                <div className="color-container" onClick={() => handleImageClick(i["color-type"])}>
                                    <h5>
                                        <p>Color:</p>
                                        <span>{i["color-type"]}</span>
                                    </h5>
                                    <div className="image-of-product">
                                        <img src={i.image} alt="" />
                                    </div>
                                </div>
                            ))}
                            <div className="quntity-and-buy-container">
                                <h2>Quantity</h2>
                                <div className="quantity-buy-section">
                                    <div className="quantity">
                                        <button>-</button>
                                        <span>{item.quantity}</span>
                                        <button>+</button>
                                    </div>
                                    <div className="buy-container">
                                        <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>






            </div>



--------------------------------------------------------------------------------------------------------------------------------------------------------------






import Navbar from "../../NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Data from "../../../assets/data/Headphone/headphone.json";
import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import Col_Two from "../Col_Two";

import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";
import { useProductContext } from "../../../context/productContext";
// import WatchColor from "./WatchColor";
import Col_One from "./Col_One";
// import ProductColor from "./ProductColor";
import CrouselProduct from "../Headphone/CrouselProduct"


const API = "http://localhost:9000/product_details";
// import {singleProduct} from "../../../context/productContext"

const ProductDetails = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();
  // console.log("getsingleProduct",singleProduct)
  const {
    id: productId,
    name,
    desc,
    price,
    old_price,
    rating,
    rating_count,
    quantity,
    image,
    watch_color,
    color_Type=[],
    default_image
  } = singleProduct;
  console.log(
    "color_Type", color_Type
    // "color_Type", default_image
  )

  const defaultCarouselImages = 
  // Data.product_details[0]["color-Type"][0]["Pitch Black"];
  Data.product_details[0]["default_image"]

  

  


  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const [carouselImages, setCarouselImages] = useState(defaultCarouselImages);

  const handleImageClick = (colorType) => {






    const selectedColorDetails = color_Type.find(
      (color) => color["color_type"] === colorType
    );






    if (selectedColorDetails && selectedColorDetails[colorType]) {
      setCarouselImages(selectedColorDetails[colorType]);
      setIsCarouselOpen(true);
    }
  };

  const { id } = useParams();
  // console.log("id", id);

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
   
    
  
  }, []);

  return (
    <div className="product-details">
      <Navbar />

      <div className="product-container-section">
        {/* crousel image  */}
        {isCarouselOpen ? (
          <CrouselProduct carouselImages={carouselImages} />
        ) : (
          <CrouselProduct carouselImages={defaultCarouselImages} />
        )}

        

        

        <div className="buy-and-color-container">
          {color_Type.map((i) => (
            <div
              className="color-container"
              onClick={() => handleImageClick(i["color_type"])}
            >
              <h5>
                <p>Color:</p>
                <span>{i["color_type"]}</span>
              </h5>
              <div className="image-of-product">
                <img src={i.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

--------------------------------------------------------------------------------


<div className="privicy-container">
<div className="">
    <img src={one} alt="" />
    <p>7 day <br /> replacement</p>
</div>
<div className="">
    <img src={three} alt="" />
    <p>1 year <br /> warranty</p>
</div>
<div className="">
    <img src={two} alt="" />
    <p>Secure <br /> payments</p>
</div>
</div>





-------------------------------------------------------------------------------------------------------------------


<div className="image-container">

{/* image section first  */}

{
  content_Image.map((i) => {

    // console.log("i", i)
    return(
  

      i.content_1.map((item) => {

        // console.log("item", item)
        return(
          <div className="product-overview-image">
            {/* <h2>hello world</h2> */}
            <img src={item} alt="image"  />
          </div>
        )
      })

    )
  }
)
}

{/* video section  */}

{
  content_Image.map((i) => {
    // console.log("video", i)
    return(

      i.content_2 ? (
        i.content_2.map((video_item) => {
          return(
            <div  className="product-overview-image">
              <video loop autoPlay muted src={video_item} alt="video"></video>

            </div>
          )
        })
      ) : null
  
    )
  })
}

{/* second image  */}

{
  content_Image.map((i) => {
    return(
      
      i.content_3 ? (
        i.content_3.map((image_item) => {
          return(
            <div className="product-overview-image">
            {/* <h2>hello world</h2> */}
            <img src={image_item} alt="image"  />
          </div>
          )
        })
      ) : null
    )
  })
}



{/* crousel item  */}

{
content_Image.map((i) => {
console.log("contantImage", content_Image)
return (
i.content_4 ? (

  

  <ProductContantCrousel
  crousel_image={i.content_4}
  />
 

  

) :null
)
})
}

{
content_Image.map((i) => {
return (

i.content_5 ? (

  i.content_5.map((item) => {
    // console.log("item", item)
    return(
      <div className="product-overview-image">
      {/* <h2>hello world</h2> */}
      <img src={item} alt="image"  />
    </div>
    )
  })
) : null
)
})
}



</div>




-------------------------------------------------------------------------------
<div className="spacification-section">

<p>Country of origin: China</p>
<p>Marketed and Imported by: Nexxbase Marketing Pvt. Ltd, Khasra No-146/25/2/1, Jail Road Badshahpur, Gurugram Haryana-122101</p>
<p>Package Contains: 1 device, 1 charging cable, 1 user manual, warranty card</p>
</div>




-------------------------------------------------------------------------------------------------------

<Navbar />

{/* <CrouselProduct  carouselImages={defaultCarouselImages}/> */}
<div className="product-container-section">
  {/* crousel image  */}
  {isCarouselOpen ? (
    <CrouselProduct carouselImages={carouselImages} />
  ) : (
    <CrouselProduct carouselImages={defaultCarouselImages} />
  )}

  <div className="product-details-container-section">
    <div className="product-details-card">
      <div className="product-details-container">
        <Col_One
          name={name}
          desc={desc}
          price={price}
          old_price={old_price}
          rating={rating}
          rating_count={rating_count}
        />
      </div>

      <div className="color-and-buy-section">
        <div className="color-and-buy-container-section">
          <div className="color-tag">
            <p>Color:</p>

            <span>{colortype ? colortype : default_color_type}</span>
          </div>

          <div className="buy-and-color-container">
            {color_Type.map((i) => (
              <div
                className="color-container"
                onClick={() => handleImageClick(i["color_type"])}
              >
                <div className="image-of-product">
                  <img src={i.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="quntity-and-buy-container">
            <h2>Quantity</h2>
            <div className="quantity-buy-section">
              <div className="quantity">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
              </div>
              <div className="buy-container">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <Privacy />
      </div>
    </div>
  </div>
</div>



-----------------------------------------------------------------


const audio = useRef(null)



const [audioMenu, setAudioMenu] = useState(false)
const [connectivityMenuVisible, setConnectivityMenuVisible] = useState(false);



const toggleAudioMenu = () => {
  setAudioMenu(!audioMenu)
  setConnectivityMenuVisible(false)
  
}

<div className="faq-container">
<nav>
{/* About parts here */}
<div className="ham-menu">
<div className="about-the-product" onClick={toggleAudioMenu}>
<h3>About the product</h3>
<div className="icon">
<a
  href="#"
  style={{ display: audioMenu ? "none" : "flex" }}
>
  <RiArrowDownSLine />
</a>
<a
  href="#"
  style={{ display: audioMenu ? "block" : "none" }}
  className="arrow-up"
>
  <IoIosArrowUp />
</a>
</div>
</div>

<div
className="off-screen-menu"
style={{ display: audioMenu ? "block" : "none" }}
>
<div className="about-the-product-contant">
<h4 className="faq-question">
  Can I use  as single earbud while listening to
  music ?
</h4>
<p className="faq-answer">
  Yes, you can. Place one earbud inside the case and use the other
  one.
</p>
</div>


</div>
</div>
</nav>
</div>




------------------------------------------------------------------------------------

  {/* second  */}
                {/* <div className="first-testimonial">

                    <div className='col-1'>
                        <div className="first">
                            <p>Our Products</p>
                            <a href="">Smart Watches</a>
                            <a href="">Wireless Earbuds</a>
                            <a href="">Luna Smart Ring</a>
                            <a href="">NoiseFit App</a>
                            <a href="">Noise Gift Card</a>
                        </div>
                        <div className="second">
                            <p>For Business</p>
                            <a href="">Noise for Business</a>
                            <a href="">Corporate Enquiries</a>
                            <a href="">Brand Partnership Enquiries</a>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="first">
                            <p>About Noise</p>
                            <a href="">About Us</a>
                            <a href="">Blogs</a>
                            <a href="">Careers</a>
                            <a href="">In the Press</a>
                        </div>
                        <div className="second">
                            <p>Legal</p>
                            <a href="">Terms & Conditions</a>
                            <a href="">Privicy Policy</a>
                            <a href="">Social Responsibility</a>
                        </div>
                    </div>

                    <div className="col-3">
                        <p>Support</p>
                        <a href="">Download your Invoice</a>
                        <a href="">Tracks Your Order</a>
                        <a href="">Shipping and Return Policy</a>
                        <a href="">Register a Complaint</a>
                        <a href="">Contact Us</a>
                    </div>




                </div> */}





---------------------------------------------------------------------


<div className="both-section">
<h2>Smart Watches</h2>
<div className="smart-watches-container">
  <div className="shop-by-price-section">
    <h3>Shop by Price</h3>
    <a href="">Smart Watches Under 2000</a>
    <a href="">Smart Watches Under 3000</a>
    <a href="">Smart Watches Under 4000</a>
    <a href="">Smart Watches Above 5000</a>
  </div>
  <div className="shop-by-features-section">
    <h3>Shop by Features</h3>
    <a href="">Smart Watches with Alexa</a>
    <a href="">AMOLED Display Smart Watches</a>
    <a href="">Round Deal Smart Watches</a>
    <a href="">Metallic & eather Smart Watches</a>
    <a href="">BT Calling Smart Watches</a>
    <a href="">Android Smart Watches</a>
  </div>
  <div className="shop-by-gender-section">
    <h3>Shop by Gender</h3>
    <a href="">Smart Watches for Men</a>
    <a href="">Smart Watches for Woman</a>
    <a href="">Smart Watches for Kids</a>
  </div>
</div>
</div>

<div className="wireless-Earbuds-container">
<h2>Wireless Earbuds</h2>
<div className="price-and-feature-container">
  <div className="Shop-by-price-section">
    <h3>Shop by Price</h3>
    <a href="">Earbuds Under 1000</a>
    <a href="">Earbuds Under 1500</a>
    <a href="">Earbuds Under 2000</a>
    <a href="">Earbuds Under 2500</a>
    <a href="">Earbuds Above 2500</a>
  </div>
  <div className="Shop-by-features-section">
    <h3>Shop by Features</h3>
    <a href="">ANC Earbuds</a>
    <a href="">Gaming Earbuds</a>
  </div>
  <div></div>
</div>
</div>




-------------------------------------------------------------------------------------------


@media screen and (min-width: 600px) and (max-width: 1024px) {

  .testimonial-container {
      margin: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      // padding: 5rem;
      border-bottom:solid black 1px;
      border-top: solid black 1px;
      padding-top: 3rem;
      padding-bottom: 3rem;

      

      // logo
  
      .logo {
        display: flex;
        flex-direction: column;
      //   margin: 1rem;

  
        a {
          img {
            margin-bottom: 1vw;
          }
        }
  
        h3 {
          font-size: 1rem;
          font-weight: lighter;
        }
  
        .link {
          margin-top: 1vw;
          margin-bottom: 1vw;
          a {
            margin: 0.3vw;
          }
        }
      }
    }
  
    // col-1
    .first-testimonial {
      display: flex;
      flex-direction: row;
      align-items: center;
      // margin: 4rem;
  
      .col-1 {
        .first {
          display: flex;
          flex-direction: column;
          align-items: center;
  
          p {
            font-size: 1.2rem;
          }
  
          a {
            display: flex;
            font-size: 1rem;
            font-weight: lighter;
            opacity: 0.3;
            line-height: 0.3px;
          }
        }
        .second{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2vw;
          flex-wrap: nowrap;
  
          p {
            font-size: 1.2rem;
          }
  
          a {
            display: flex;
            font-size: 1rem;
            font-weight: lighter;
            opacity: 0.3;
            line-height: 0.3vw;
            flex-wrap: wrap;
  
          }
        }
      }
  
      // col-2  
  
      .col-2{
          display: flex;
          flex-direction: column;
          // margin: 4rem;
          
  
          .first{
              display: flex;
              flex-direction: column;
  
              a{
                  opacity: 0.4;
                  padding: 5px;
              }
          }
  
          .second{
              display: flex;
              flex-direction: column;
  
              p{
                  padding-top: 3rem;
                  padding-bottom: 1rem;
              }
  
              a{
                  opacity: 0.4;
                  padding: 5px;
              }
          }
  
      }
  
  
      .col-3{
          display: flex;
          flex-direction: column;
          // margin: 4rem;
  
          p{
              padding-bottom: 1rem;
          }
  
          a{
              opacity: 0.4;
              padding: 5px;
  
          }
      }
    }
  
  
    .footer{
      margin: 10rem;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: start;
    }


}



-----------------------------------------------------------------------
  // axios.post("http://localhost:9000/cart", {
  //   cart
  // })
  // .then((response) => {
  //   console.log("response", response)
  // })


  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])


  // useEffect(() => {
  //   if (!hasPosted && cart.length > 0) {
  //     axios.post("http://localhost:9000/cart", cart )
  //       .then((response) => {
  //         console.log("response", response);
  //         setHasPosted(true); // Set the flag to true after posting
  //       })
  //       .catch((error) => {
  //         console.error("Error posting cart data", error);
  //       });
  //   }
  // }, [cart, hasPosted]);

  // useEffect(() => {
  //   // Fetch existing cart data from the server
  //   axios.get("http://localhost:9000/cart")
  //     .then((response) => {
  //       const existingCartData = response.data;

  //       // Check if the cart item already exists in the server
  //       const isDuplicate = existingCartData.some((existingItem) => {
  //         return cart.some((newItem) => newItem.id === existingItem.id);
  //       });

  //       // If it's not a duplicate, post the new cart data
  //       if (!isDuplicate && cart.length > 0) {
  //         axios.post("http://localhost:9000/cart", cart )
  //           .then((postResponse) => {
  //             console.log("postResponse", postResponse);
  //           })
  //           .catch((postError) => {
  //             console.error("Error posting cart data", postError);
  //           });
  //       }
  //     })
  //     .catch((getError) => {
  //       console.error("Error fetching existing cart data", getError);
  //     });
  // }, [cart]); // Dependency array includes cart
  



  ----------------------------------------------------------------------------------------------------------------------

  <div className="cart-item-card-container-section">
  <div className="cart-item-image-section">
    <img src={i.colorImage} alt="" className="cart-image-section" />
  </div>
  <div className="cart-item-contant-section">
    <h5 className="cart-item-name">{i.name}</h5>
    <p className="cart-item-price-section">{i.price}</p>
    <p className="cart-item-old-price-section">
      <s>{i.old_price}</s>
    </p>
    <p className="price-percantage-off">72% oFF</p>
    <div className="increase-descrease-button">
      <button>-</button>
      <p className="amount-section">{i.amount}</p>
      <button>+</button>
    </div>
  </div>
  <div className="remove-container-section">
    <FaRegTrashAlt />
    <span>{i.colorTextName}</span>
  </div>
  
</div>



------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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

    // const [color, setColor] = useState()
    // console.log("color", color)

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
        
          onClick={() =>
            { handleImageClick(i["color_type"])
              setIsColorSelected(true)
            }}
          
        >
          <div className="image-of-product" onClick={() => setColor(i["image"])}  key={index}>
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
          <NavLink to="/add-to-cart-noise"
          
          onClick={() => 
          {
            if(isColorSelected){
              addtoCart(id, color, amount, product)}

            }
          }
          

          >
          <button
          
          required 
          
          >Buy Now</button>

          </NavLink>
        </div>
      </div>
    </div>
  </div>


  )
}

export default ColorAndQuantity