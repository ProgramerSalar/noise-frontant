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

import { NavLink, useParams } from "react-router-dom";
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
import ProductContant from "./ProductContant";
import ColorAndQuantity from "./ColorAndQuantity";
import { useCartContext } from "../../../context/Cart_Context";

// const API = "http://localhost:9000/product_details";
const API = `${import.meta.env.VITE_BACKENT_URL}/product_details`;



const ProductDetails = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();

  const { addtoCart } = useCartContext();

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

  // console.log("ColorType", Reviews);

  const product = {
    name,
    price,
    old_price,
    quantity,
  };
  // console.log("product", product)

  const { id } = useParams();

  const defaultCarouselImages = default_image;

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState();

  const [colorImage, setColor] = useState();
  const [ColorTextName, setColorTextName] = useState();
  // console.log("color", colorImage)
  // console.log("colorTypeText", ColorTextName)

  const color = {
    colorImage,
    ColorTextName,
  };
  // console.log(color)

  const [amount, setAmount] = useState(1);
  // console.log("amount", amount)

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
    // console.log("setColorTyp", colorType)
  };


  

  // console.log("color", color_Type)

  const setDescreased = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncreased = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };

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

        <div className="product-details-container-section">
          <div className="product-details-card">
            {/* product details  */}
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

            {/* salacted color name and color Image add to the card try here  */}
            {/* <div>
              <img src={colorImage} alt=""  />
              <span>{ColorTextName}</span>
            </div> */}

            <div className="color-and-buy-section">
              {/* color and quantity section  */}

              <ColorAndQuantity
                colortype={colortype}
                default_color_type={default_color_type}
                color_Type={color_Type}
                handleImageClick={handleImageClick}
                setDescreased={setDescreased}
                setIncreased={setIncreased}
                amount={amount}
                addtoCart={addtoCart}
                id={id}
                product={product}
                setColor={setColor}
                setColorTextName={setColorTextName}
                color={color}
              />

              <Privacy />
            </div>
          </div>
        </div>
      </div>

      {/* product Contant  */}
      <div>
        <ProductContant content_Image={content_Image} />
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
