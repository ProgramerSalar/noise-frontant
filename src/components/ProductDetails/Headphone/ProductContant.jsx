import React from 'react'
import ProductContantCrousel from './ProductContantCrousel';

const ProductContant = ({
    content_Image
}) => {
  return (
    
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
    //   console.log("contantImage", content_Image);
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


  )
}

export default ProductContant