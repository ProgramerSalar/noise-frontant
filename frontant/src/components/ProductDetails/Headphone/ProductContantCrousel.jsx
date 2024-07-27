import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductContantCrousel = ({crousel_image}) => {
    // console.log("crouseImage in jsx file", crousel_image[2])
    const imagePath = crousel_image[2]
    // console.log("imagePath", imagePath)
  return (
    <div className='crousel-container'>
    <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false}>
        {
            crousel_image.map((image, index) => {
                // console.log("image", image)
                return(
                    <div key={index} className='parent'>
                  <img src={image} alt="image" className='crousel-image' />
                </div>
                )
            })
        }
    
    
    
  </Carousel>

    </div>

  )
}

export default ProductContantCrousel