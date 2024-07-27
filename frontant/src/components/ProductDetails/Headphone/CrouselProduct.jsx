
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Data from "../../../assets/data/Headphone/headphone.json";











const CrouselProduct = ({ carouselImages }) => {

    


    return (
        <div className="product-crousel">
            <Carousel autoPlay={true} infiniteLoop={true}>
                {Array.isArray(carouselImages) && carouselImages.map((imageSrc, index) => (
                    <div key={index} className='parent-product'>
                        <img src={imageSrc} className='crousel-image' alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CrouselProduct;
