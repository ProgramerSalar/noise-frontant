
import Data from "../assets/data/product.json"
import { PiGreaterThan } from 'react-icons/pi'
import { FaStar } from 'react-icons/fa'



const HotSellingProduct = () => {
    return (
        <div className="product-main-section">

            <div className="icon-and-heading-tag">
                <h1>Hot-Selling Gadgets</h1>
                <a href="/collection" className="icon">View all <PiGreaterThan /></a>
            </div>

            <p className="upper-product-border"></p>


            <div className="main-container">




                {
                    Data.product.map((i, index) => (
                        <div key={index} className="product-container">

                            <div className="product-section">
                                <div className="product-image">
                                    <p className="image-heading">BEST VALUE</p>
                                    <a href="/product-details">
                                        <img src={i.image} alt="" />
                                    </a>
                                </div>
                                <div className="product-details">
                                    <h5>{i.name}</h5>
                                    <p className="product-descripation">{i.desc}</p>
                                    <div className="product-color">
                                        <p className="color1">{i["watch-color"][0]['color1']}</p>
                                        <p></p>
                                        <p className="color2">{i["watch-color"][0]['color2']}</p>
                                        <p></p>
                                        <p className="color3">{i["watch-color"][0]['color3']}</p>
                                        <p></p>
                                        <p className="extra-color">{i["watch-color"][0]['extra-color']}</p>


                                    </div>
                                    <div className="price-rating-container">
                                        <div className="price">
                                            <p className="real-price">{i.price}</p>
                                            <p className="old-price">
                                                <s>
                                                    {i["old-price"]}
                                                </s>
                                            </p>
                                        </div>
                                        <div className="rating">
                                            <FaStar />
                                            <p>{i.star}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default HotSellingProduct