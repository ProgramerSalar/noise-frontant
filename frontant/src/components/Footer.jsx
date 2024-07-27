import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const Footer = () => {
  const [SmartWatch, setSmartWatch] = useState(false);
  const [WirelessEarbuds, setWirelessEarbuds] = useState(false);

  const toogleSmartWatch = () => {
    setSmartWatch(!SmartWatch);
    setWirelessEarbuds(false);
  };

  const toogleWirelessEarbuds = () => {
    setWirelessEarbuds(!WirelessEarbuds);
    setSmartWatch(false);
  };

  return (
    <div className="footer-container">
      <div className="footer-both-section">
        {window.innerWidth <= 450 ? (
          <div>
            <nav>
              {/* for Business parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toogleSmartWatch}>
                  <h3>Smart Watches</h3>
                  <div className="icon">
                    <a
                      href="#"
                      style={{ display: SmartWatch ? "none" : "flex" }}
                    >
                      <RiArrowDownSLine />
                    </a>
                    <a
                      href="#"
                      style={{ display: SmartWatch ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: SmartWatch ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <div className="both-section">
                      <h2>Smart Watches</h2>
                      <div className="smart-watches-container">
                        <div className="shop-by-price-section">
                          <h3>Shop by Price</h3>
                          <span  href="">Smart Watches Under 2000</span>
                          <span href="">Smart Watches Under 3000</span>
                          <span href="">Smart Watches Under 4000</span>
                          <span href="">Smart Watches Above 5000</span>
                        </div>
                        <div className="shop-by-features-section">
                          <h3>Shop by Features</h3>
                          <span href="">Smart Watches with Alexa</span>
                          <span href="">AMOLED Display Smart Watches</span>
                          <span href="">Round Deal Smart Watches</span>
                          <span href="">Metallic & eather Smart Watches</span>
                          <span href="">BT Calling Smart Watches</span>
                          <span href="">Android Smart Watches</span>
                        </div>
                        <div className="shop-by-gender-section">
                          <h3>Shop by Gender</h3>
                          <span href="">Smart Watches for Men</span>
                          <span href="">Smart Watches for Woman</span>
                          <span href="">Smart Watches for Kids</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <nav>
              {/* for Business parts here */}
              <div className="ham-menu">
                <div
                  className="about-the-product"
                  onClick={toogleWirelessEarbuds}
                >
                  <h3>Wireless Earbuds</h3>
                  <div className="icon">
                    <a
                      href="#"
                      style={{ display: WirelessEarbuds ? "none" : "flex" }}
                    >
                      <RiArrowDownSLine />
                    </a>
                    <a
                      href="#"
                      style={{ display: WirelessEarbuds ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: WirelessEarbuds ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <div className="wireless-Earbuds-container">
                      <h2>Wireless Earbuds</h2>
                      <div className="price-and-feature-container">
                        <div className="Shop-by-price-section">
                          <h3>Shop by Price</h3>
                          <span href="">Earbuds Under 1000</span>
                          <span href="">Earbuds Under 1500</span>
                          <span href="">Earbuds Under 2000</span>
                          <span href="">Earbuds Under 2500</span>
                          <span href="">Earbuds Above 2500</span>
                        </div>
                        <div className="Shop-by-features-section">
                          <h3>Shop by Features</h3>
                          <span href="">ANC Earbuds</span>
                          <span href="">Gaming Earbuds</span>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div>
            <div className="both-section">
              <h2>Smart Watches</h2>
              <div className="smart-watches-container">
                <div className="shop-by-price-section">
                  <h3>Shop by Price</h3>
                  <span href="">Smart Watches Under 2000</span>
                  <span href="">Smart Watches Under 3000</span>
                  <span href="">Smart Watches Under 4000</span>
                  <span href="">Smart Watches Above 5000</span>
                </div>
                <div className="shop-by-features-section">
                  <h3>Shop by Features</h3>
                  <span href="">Smart Watches with Alexa</span>
                  <span href="">AMOLED Display Smart Watches</span>
                  <span href="">Round Deal Smart Watches</span>
                  <span href="">Metallic & eather Smart Watches</span>
                  <span href="">BT Calling Smart Watches</span>
                  <span href="">Android Smart Watches</span>
                </div>
                <div className="shop-by-gender-section">
                  <h3>Shop by Gender</h3>
                  <span href="">Smart Watches for Men</span>
                  <span href="">Smart Watches for Woman</span>
                  <span href="">Smart Watches for Kids</span>
                </div>
              </div>
            </div>

            <div className="wireless-Earbuds-container">
              <h2>Wireless Earbuds</h2>
              <div className="price-and-feature-container">
                <div className="Shop-by-price-section">
                  <h3>Shop by Price</h3>
                  <span href="">Earbuds Under 1000</span>
                  <span href="">Earbuds Under 1500</span>
                  <span href="">Earbuds Under 2000</span>
                  <span href="">Earbuds Under 2500</span>
                  <span href="">Earbuds Above 2500</span>
                </div>
                <div className="Shop-by-features-section">
                  <h3>Shop by Features</h3>
                  <span href="">ANC Earbuds</span>
                  <span href="">Gaming Earbuds</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footer">
        <p>© 2022 Noise. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
