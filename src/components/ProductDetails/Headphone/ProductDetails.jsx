import Navbar from "../../NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Data from "../../../assets/data/Headphone/headphone.json";
import { useEffect, useState } from "react";
import one from "../../../assets/product_details/privacy/one.png";
import two from "../../../assets/product_details/privacy/two.png";
import three from "../../../assets/product_details/privacy/three.png";

import { FaStar } from "react-icons/fa";
import Col_Two from "./Col_Two";

import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";
import { useProductContext } from "../../../context/productContext";
// import WatchColor from "./WatchColor";
import Col_One from "./Col_One";
// import ProductColor from "./ProductColor";
import CrouselProduct from "../Headphone/CrouselProduct";
import WatchColor from "./WatchColor";
import Privacy from "../Privacy";
import ProductContantCrousel from "./ProductContantCrousel";
import Footer from "../../Footer";
import Testimonials from "../../Testimonials";
import FAQ from "../../Spacification/FAQ_constant";
import Disclaimer from "../../Spacification/Disclaimer";
import Spacification from "../../Spacification/Spacification";
import Heading from "../../CustomerReview/Heading";
import Review from "../../CustomerReview/Review";

const API = "http://localhost:9000/product_details";

const ProductDetails = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();

  // const {default_image} = singleProduct;
  const {
    id: productId,
    name,
    desc,
    price,
    old_price,
    rating,
    rating_count,
    quantity,
    color_Type = [],
    default_image,
    default_color_type,
    content_Image = [],
    Reviews = [],
  } = singleProduct;

  console.log("ColorType", Reviews);

  const { id } = useParams();

  const defaultCarouselImages = default_image;

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState();

  const [colortype, setColorType] = useState();

  const handleImageClick = (colorType) => {
    const selectedColorDetails = color_Type.find(
      (color) => color["color_type"] === colorType
    );

    if (selectedColorDetails && selectedColorDetails[colorType]) {
      setCarouselImages(selectedColorDetails[colorType]);
      setIsCarouselOpen(true);
    }

    // console.log("colorType", colorType)
    setColorType(colorType);
  };

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  return (
    <div className="product-details">
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

      <div className="image-container">
        {/* image section first  */}

        {content_Image.map((i) => {
          // console.log("i", i)
          return i.content_1.map((item) => {
            // console.log("item", item)
            return (
              <div className="product-overview-image">
                {/* <h2>hello world</h2> */}
                <img src={item} alt="image" />
              </div>
            );
          });
        })}

        {/* video section  */}

        {content_Image.map((i) => {
          // console.log("video", i)
          return i.content_2
            ? i.content_2.map((video_item) => {
                return (
                  <div className="product-overview-image">
                    <video
                      loop
                      autoPlay
                      muted
                      src={video_item}
                      alt="video"
                    ></video>
                  </div>
                );
              })
            : null;
        })}

        {/* second image  */}

        {content_Image.map((i) => {
          return i.content_3
            ? i.content_3.map((image_item) => {
                return (
                  <div className="product-overview-image">
                    {/* <h2>hello world</h2> */}
                    <img src={image_item} alt="image" />
                  </div>
                );
              })
            : null;
        })}

        {/* crousel item  */}

        {content_Image.map((i) => {
          console.log("contantImage", content_Image);
          return i.content_4 ? (
            <ProductContantCrousel crousel_image={i.content_4} />
          ) : null;
        })}

        {content_Image.map((i) => {
          return i.content_5
            ? i.content_5.map((item) => {
                // console.log("item", item)
                return (
                  <div className="product-overview-image">
                    {/* <h2>hello world</h2> */}
                    <img src={item} alt="image" />
                  </div>
                );
              })
            : null;
        })}
      </div>

      <Spacification />

      <FAQ name={name} />
      <Disclaimer name={name} />

      <Heading />
      <Review Reviews={Reviews} />

      <Testimonials />
      <Footer />
    </div>
  );
};

export default ProductDetails;
