import { GrLinkNext } from "react-icons/gr"
import thirteen from "../assets/Image/Content/thirteen.jpg"
import twelve from "../assets/Image/Content/twelve.png"
import five from "../assets/Image/Content/five.png"
import seven from "../assets/Image/Content/seven.png"
import six from "../assets/Image/Content/six.png"
import eleven from "../assets/Image/Content/eleven.png"
import eight from "../assets/Image/Content/eight.png"
import one from "../assets/Image/Content/one.png"
import nine from "../assets/Image/Content/nine.png"
import two from "../assets/Image/Content/two.png"
import ten from "../assets/Image/Content/ten.png"
import forteen from "../assets/Image/Content/fourteen.png"







const Content = () => {
    return (
        <div className="home-container">
            <div className="content-container">



                {/* first wallpaper  */}
                <div className="first-content-wallpaper">
                    <a href="https://www.gonoise.com/products/luna-smart-ring">
                        <img src={thirteen} alt="" className="wallpaper-1" />

                    </a>
                </div>

                {/* first image with product  */}

                <div className="first-product-with-image">

                    <div className="fist-image-content">
                        <a href="/hot-selling-product-collection">
                            <img src={twelve} className="photo-1" alt="" />

                        </a>
                    </div>

                    <div className="first-product-content-and-Image">

                        <div className="first-product-content">
                            <div className="product-content">
                                <a href="/hot-selling-product-collection">
                                    <p>For Fashion <GrLinkNext /> </p>
                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={five} className="product-1" alt="" />

                                </a>
                            </div>
                            <div className="product-content">
                                <a href="/hot-selling-product-collection">
                                    <p>For Adventure <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={five} className="product-1" alt="" />

                                </a>
                            </div>
                        </div>

                        <div className="second-product-content">
                            <div className="product-content">
                                <a href="">
                                    <p>For your <br /> Lifestyle <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={seven} className="product-1" alt="" />

                                </a>
                            </div>
                            <div className="product-content">
                                <a href="">
                                    <p>For Productivity <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={six} id="product-2" className="product-1" alt="" />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>




                {/* send wallpaper  */}
                <div className="second-content-wallpaper">
                    <a href="">
                        <img src={eleven} alt="" />

                    </a>
                </div>



                {/* second image with product  */}
                <div className="second-product-with-image">
                    <div className="second-product-content">

                        <div className="first-product">
                            <div className="product-content-1">
                                <a href="/hot-selling-product-collection">
                                    <p>For Fashion <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={eight} className="photo-2" alt="" />

                                </a>
                            </div>
                            <div className="product-content-2">
                                <a href="/hot-selling-product-collection">
                                    <p>For Adventure <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={one} className="photo-2" alt="" />

                                </a>
                            </div>
                        </div>

                        <div className="second-product">
                            <div className="product-content-1">
                                <a href="/hot-selling-product-collection">
                                    <p>For your <br /> Lifestyle <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={nine} className="photo-2" alt="" />

                                </a>
                            </div>
                            <div className="product-content-2">
                                <a href="/hot-selling-product-collection">
                                    <p>For Productivity <GrLinkNext /> </p>

                                </a>
                                <a href="/hot-selling-product-collection">
                                    <img src={two} id="product-2" className="photo-2" alt="" />

                                </a>
                            </div>
                        </div>

                    </div>



                    <div className="second-image">
                        <a href="/hot-selling-product-collection">
                            <img src={ten} alt="" className="second-image" />

                        </a>
                    </div>
                </div>



                {/* image with content  */}
                <div className="third-content-wallpaper">
                    <div className="content-wallpaper-product">
                        <a href="/hot-selling-product-collection">
                        <img src={forteen} alt="" />

                        </a>
                    </div>
                    <div className="content-written">
                        <h1>Hear the Noise first</h1>
                        <h5>Sign up now to hear about our latest offers, new products, <br /> collaborations, all things Noise - straight to your inbox.</h5>
                        <input type="text" placeholder="Your email here" />
                        <button>SIGN UP</button>
                    </div>


                </div>




            </div>

        </div>
    )
}

export default Content