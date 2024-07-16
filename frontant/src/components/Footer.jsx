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
                          <a href="">Smart Watches Under 2000</a>
                          <a href="">Smart Watches Under 3000</a>
                          <a href="">Smart Watches Under 4000</a>
                          <a href="">Smart Watches Above 5000</a>
                        </div>
                        <div className="shop-by-features-section">
                          <h3>Shop by Features</h3>
                          <a href="">Smart Watches with Alexa</a>
                          <a href="">AMOLED Display Smart Watches</a>
                          <a href="">Round Deal Smart Watches</a>
                          <a href="">Metallic & eather Smart Watches</a>
                          <a href="">BT Calling Smart Watches</a>
                          <a href="">Android Smart Watches</a>
                        </div>
                        <div className="shop-by-gender-section">
                          <h3>Shop by Gender</h3>
                          <a href="">Smart Watches for Men</a>
                          <a href="">Smart Watches for Woman</a>
                          <a href="">Smart Watches for Kids</a>
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
                          <a href="">Earbuds Under 1000</a>
                          <a href="">Earbuds Under 1500</a>
                          <a href="">Earbuds Under 2000</a>
                          <a href="">Earbuds Under 2500</a>
                          <a href="">Earbuds Above 2500</a>
                        </div>
                        <div className="Shop-by-features-section">
                          <h3>Shop by Features</h3>
                          <a href="">ANC Earbuds</a>
                          <a href="">Gaming Earbuds</a>
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
                  <a href="">Smart Watches Under 2000</a>
                  <a href="">Smart Watches Under 3000</a>
                  <a href="">Smart Watches Under 4000</a>
                  <a href="">Smart Watches Above 5000</a>
                </div>
                <div className="shop-by-features-section">
                  <h3>Shop by Features</h3>
                  <a href="">Smart Watches with Alexa</a>
                  <a href="">AMOLED Display Smart Watches</a>
                  <a href="">Round Deal Smart Watches</a>
                  <a href="">Metallic & eather Smart Watches</a>
                  <a href="">BT Calling Smart Watches</a>
                  <a href="">Android Smart Watches</a>
                </div>
                <div className="shop-by-gender-section">
                  <h3>Shop by Gender</h3>
                  <a href="">Smart Watches for Men</a>
                  <a href="">Smart Watches for Woman</a>
                  <a href="">Smart Watches for Kids</a>
                </div>
              </div>
            </div>

            <div className="wireless-Earbuds-container">
              <h2>Wireless Earbuds</h2>
              <div className="price-and-feature-container">
                <div className="Shop-by-price-section">
                  <h3>Shop by Price</h3>
                  <a href="">Earbuds Under 1000</a>
                  <a href="">Earbuds Under 1500</a>
                  <a href="">Earbuds Under 2000</a>
                  <a href="">Earbuds Under 2500</a>
                  <a href="">Earbuds Above 2500</a>
                </div>
                <div className="Shop-by-features-section">
                  <h3>Shop by Features</h3>
                  <a href="">ANC Earbuds</a>
                  <a href="">Gaming Earbuds</a>
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
