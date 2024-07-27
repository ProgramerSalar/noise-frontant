
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useNavigate } from 'react-router-dom';
import twenty_one from "../assets/offer/twenty_one.png";





export const CrouselItem = () => {

    const navigate = useNavigate()
    return (
        <div className='crousel-container'>
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} >
               
                <div className='parent' onClick={() => navigate("/hot-selling-product-collection") }>
                    
                        <img src={twenty_one} className='crousel-image' />
                    
                </div>
                <div className='parent' onClick={() => navigate("/hot-selling-product-collection") }>
                    
                        <img src={twenty_one} className='crousel-image' />
                    
                </div>
                <div className='parent' onClick={() => navigate("/hot-selling-product-collection") }>
                    
                        <img src={twenty_one} className='crousel-image' />
                    
                </div>
                <div className='parent' onClick={() => navigate("/hot-selling-product-collection") }>
                    
                        <img src={twenty_one} className='crousel-image' />
                    
                </div>
            </Carousel>
        </div>
    )
}
