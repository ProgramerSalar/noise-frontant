import { CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CrouselItem } from "../components/CrouselItem";
import CategoryItem from "../components/CategoryItem";
import ProductItem from "../components/ProductItem";
// import HotSellingProduct from "../components/HotSellingProduct";
import JustLaunched from "../components/JustLaunched";
import Content from "../components/Content";
import NoiseBlogs from "../components/NoiseBlogs";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/NavBar";

import HotSellingProduct from "../components/ProductDetails/Headphone/HotSellingProduct";
import { useContext } from "react";
import { AppContext, useProductContext } from "../context/productContext";
import twenty_one from "../assets/offer/twenty_one.png";

const Home = () => {

  // console.log(window)
  return (
    <div className="home-container">
      {/* navbar container  */}

      <div>
        <Navbar />
      </div>

    

      <div className="wallpaper-container">
      <img src={twenty_one} className='single-image'  />
        

      </div>

      

      {/* product section  */}
      <div>
        {/* <ProductItem/> */}
        {/* <HotSellingProduct/> */}
        <HotSellingProduct /> {/* for try */}
      </div>
      <div>
        {/* <ProductItem/> */}
        {/* <HotSellingProduct/> */}
        <HotSellingProduct /> {/* for try */}
      </div>

      <div>{/* <JustLaunched/> */}</div>

      <div>
        <Content />
      </div>

      {/* <div>
        <NoiseBlogs />
      </div> */}

      {/* Testimonials */}

      <div>
        <Testimonials />
      </div>



      
    </div>
  );
};

export default Home;
