import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const jsonData = {
  "color_type_Image": [
    "../assets/Product/Headphone/Buds_vs402_gaming/Neon-white/two.png",
    "../assets/Product/Headphone/Buds_vs402_gaming/Neon-white/one.png",
    "../assets/Product/Headphone/Buds_vs402_gaming/Neon-white/three.png",
    "../assets/Product/Headphone/Buds_vs402_gaming/Neon-white/four.png",
    "../assets/Product/Headphone/Buds_vs402_gaming/Neon-white/six.png"
  ]
};

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {jsonData["color_type_Image"].map((imagePath, index) => (
        <div key={index}>
          <img src={imagePath} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
