import CrouselProduct from "../components/ProductDetails/Headphone/CrouselProduct"
import Navbar from "../components/NavBar"
import Data from "../assets/data/product_details.json"
import { CiStar } from "react-icons/ci"
import Col_One from "../components/ProductDetails/Col_One"
import Col_Two from "../components/ProductDetails/Col_Two"


const ProductDetails = ({ isCarouselOpen, carouselImages }) => {



  return (

    <div className="product-details">

      <Navbar />

      <div className="product-container-section">


        {/* <CrouselProduct />    */}

        <CrouselProduct />   
        {/* {isCarouselOpen && <CrouselProduct carouselImages={carouselImages} />} */}

        <Col_One />


      </div>

      <Col_Two />




    </div>
  )
}

export default ProductDetails