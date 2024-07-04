import React, { useRef, useState } from "react";
import { useProductContext } from "../../context/productContext";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

// const API = "http://localhost:9000/product_details";

const Spacification = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();

  const audio = useRef(null);
  const connectivity = useRef(null);
  const BatteryCharging = useRef(null);
  // const physicalSpacification = useRef(null)

  const [audioMenu, setAudioMenu] = useState(false);
  const [connectivityMenuVisible, setConnectivityMenuVisible] = useState(false);
  const [BatteryChargingMenuVisible, setBatteryChargingMenuVisible] =
    useState(false);
  const [physicalSpacification, setPhysicalSpacification] = useState(false);
  const [AdditionFeature, setAdditionoFeature] = useState(false);
  const [Comfort, setComfort] = useState(false);

  const toggleAudioMenu = () => {
    setAudioMenu(!audioMenu);
    setConnectivityMenuVisible(false);
  };

  const toggleConnectivityMenu = () => {
    setConnectivityMenuVisible(!connectivityMenuVisible);
    setAudioMenu(false);
    setBatteryChargingMenuVisible(false);
  };

  const toggleBatteryChargingMenu = () => {
    setBatteryChargingMenuVisible(!BatteryChargingMenuVisible);
    setAudioMenu(false);
  };

  const togglephysicalSpacificationMenu = () => {
    setPhysicalSpacification(!physicalSpacification);
    setAudioMenu(false);
  };

  const toggleAdditionFeatureMenu = () => {
    setAdditionoFeature(!AdditionFeature);
    setAudioMenu(false);
  };

  const togglecomfortMenu = () => {
    setComfort(!Comfort);
    setAudioMenu(false);
  };

  const { Spacification_paragraph } = singleProduct;
  // console.log(Spacification_paragraph);

  return (
    <div>
      {Spacification_paragraph
        ? Spacification_paragraph.map((i) => {
            // console.log(i);
            return (
              <div className="faq-container">
                <div className="spacific-constant">
                  <h1 className="spacification-heading">Specifications</h1>
                  <div className="container-one">
                    <div className="one">
                      <p className="country-of-origin">Country of origin: </p>
                      <p className="country-of-origin-india">India</p>
                    </div>
                    <div className="one">
                      <p className="marketed-by-and-imported-by">
                        Marketed and Imported by:{" "}
                      </p>
                      <p className="imported-company-name">
                        Nexxbase Marketing Pvt. Ltd, Khasra No-146/25/2/1, Jail
                        Road Badshahpur, Gurugram Haryana-122101
                      </p>
                    </div>
                    <div className="one">
                      <p className="package-contants">Package Contains: </p>
                      <p className="answer-the-package-contants">
                        1 device, 1 charging cable, 1 user manual, warranty card
                      </p>
                    </div>
                  </div>
                </div>
                <nav>
                  {/* Audio parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={toggleAudioMenu}
                    >
                      <h3>Audio</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{ display: audioMenu ? "none" : "flex" }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{ display: audioMenu ? "block" : "none" }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{ display: audioMenu ? "block" : "none" }}
                    >
                      <div className="spacification-section">
                        <p>Speaker Driver</p>
                        <p>{i.audio.Speaker_Driver}</p>
                      </div>
                    </div>
                  </div>
                </nav>

                <nav>
                  {/* Connectivity parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={toggleConnectivityMenu}
                    >
                      <h3>Connectivity</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{
                            display: connectivityMenuVisible ? "none" : "flex",
                          }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{
                            display: connectivityMenuVisible ? "block" : "none",
                          }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{
                        display: connectivityMenuVisible ? "block" : "none",
                      }}
                    >
                      <div className="spacification-section">
                        {i.Connectivity.BT ? (
                          <div className="row-one">
                            <p>BT: </p>
                            <p>{i.Connectivity.BT}</p>
                          </div>
                        ) : null}

                        {i.Connectivity.Wireless_Range ? (
                          <div className="row-one">
                            <p>Wireless Rang: </p>
                            <p>{i.Connectivity.Wireless_Range}</p>
                          </div>
                        ) : null}

                        {i.Connectivity.BT_Supported_Profile ? (
                          <div className="row-one">
                            <p>BT Supported Profile: </p>
                            <p>{i.Connectivity.BT_Supported_Profile}</p>
                          </div>
                        ) : null}

                        {i.Connectivity.Compatibility ? (
                          <div className="row-one">
                            <p>Compatibility: </p>
                            <p>{i.Connectivity.Compatibility}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </nav>

                <nav>
                  {/* Battery Charging parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={toggleBatteryChargingMenu}
                    >
                      <h3>Battery Charging</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{
                            display: BatteryChargingMenuVisible
                              ? "none"
                              : "flex",
                          }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{
                            display: BatteryChargingMenuVisible
                              ? "block"
                              : "none",
                          }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{
                        display: BatteryChargingMenuVisible ? "block" : "none",
                      }}
                    >
                      <div className="spacification-section">
                        {i.Battery_Charging.Playtime ? (
                          <div className="row-one">
                            <p>Playtime:</p>
                            <p>{i.Battery_Charging.Playtime}</p>
                          </div>
                        ) : null}

                        {i.Battery_Charging.Charging_Time ? (
                          <div className="row-one">
                            <p>Earbuds Charging Time: </p>
                            <p>{i.Battery_Charging.Charging_Time}</p>
                          </div>
                        ) : null}

                        {i.Battery_Charging.Charging_Case_Charge_time ? (
                          <div className="row-one">
                            <p>Charging Case Charge time: </p>
                            <p>
                              {i.Battery_Charging.Charging_Case_Charge_time}
                            </p>
                          </div>
                        ) : null}

                        {i.Battery_Charging.Charging_Indicator ? (
                          <div className="row-one">
                            <p>Charging Indicator: </p>
                            <p>{i.Battery_Charging.Charging_Indicator}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </nav>

                <nav>
                  {/* physical specification parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={togglephysicalSpacificationMenu}
                    >
                      <h3>Physical Specification</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{
                            display: physicalSpacification ? "none" : "flex",
                          }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{
                            display: physicalSpacification ? "block" : "none",
                          }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{
                        display: physicalSpacification ? "block" : "none",
                      }}
                    >
                      <div className="spacification-section">
                        {i.Physical_Specification.Earbuds_Weight ? (
                          <div className="row-one">
                            <p>Earbuds Weights:</p>
                            <p>{i.Physical_Specification.Earbuds_Weight}</p>
                          </div>
                        ) : null}

                        {i.Physical_Specification.Charging_case_dimension ? (
                          <div className="row-one">
                            <p>Charging case dimension: </p>
                            <p>
                              {i.Physical_Specification.Charging_case_dimension}
                            </p>
                          </div>
                        ) : null}

                        {i.Physical_Specification.Charging_case_weight ? (
                          <div className="row-one">
                            <p>Charging case weight: </p>
                            <p>
                              {i.Physical_Specification.Charging_case_weight}
                            </p>
                          </div>
                        ) : null}

                        {i.Physical_Specification.Water_Resistance_Rating ? (
                          <div className="row-one">
                            <p>Water Resistance Rating: </p>
                            <p>
                              {i.Physical_Specification.Water_Resistance_Rating}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </nav>

                <nav>
                  {/* Additional Features parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={toggleAdditionFeatureMenu}
                    >
                      <h3>Additional Features</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{
                            display: AdditionFeature ? "none" : "flex",
                          }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{
                            display: AdditionFeature ? "block" : "none",
                          }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{
                        display: AdditionFeature ? "block" : "none",
                      }}
                    >
                      <div className="spacification-section">
                        <div className="row-one">
                          <p>Instacharge™:</p>
                          <p>{i.Additional_Features.Instacharge}</p>
                        </div>
                        {i.Additional_Features
                          .Quad_mics_with_Environmental_Noise_Cancellation ? (
                          <div className="row-one">
                            <p>
                              Quad mics with Environmental Noise Cancellation:{" "}
                            </p>
                            <p>
                              {
                                i.Additional_Features
                                  .Quad_mics_with_Environmental_Noise_Cancellation
                              }
                            </p>
                          </div>
                        ) : null}

                        {i.Additional_Features.Active_Noise_Canellation ? (
                          <div className="row-one">
                            <p>Active Noise Canellation: </p>
                            <p>
                              {i.Additional_Features.Active_Noise_Canellation}
                            </p>
                          </div>
                        ) : null}

                        {i.Additional_Features.Quad_mics ? (
                          <div className="row-one">
                            <p>Quad mics: </p>
                            <p>{i.Additional_Features.Quad_mics}</p>
                          </div>
                        ) : null}

                        {i.Additional_Features.Hands_free_Calling ? (
                          <div className="row-one">
                            <p>Hands free Calling: </p>
                            <p>{i.Additional_Features.Hands_free_Calling}</p>
                          </div>
                        ) : null}

                        {i.Additional_Features.Voice_Assistant ? (
                          <div className="row-one">
                            <p>Voice Assistant: </p>
                            <p>{i.Additional_Features.Voice_Assistant}</p>
                          </div>
                        ) : null}

                        {i.Additional_Features.Gaming_mode ? (
                          <div className="row-one">
                            <p>Gaming mode : </p>
                            <p>{i.Additional_Features.Gaming_mode}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </nav>

                <nav>
                  {/* comforts parts here */}
                  <div className="ham-menu">
                    <div
                      className="about-the-product"
                      onClick={togglecomfortMenu}
                    >
                      <h3>Comfort</h3>
                      <div className="icon">
                        <a
                          href="#"
                          style={{
                            display: Comfort ? "none" : "flex",
                          }}
                        >
                          <RiArrowDownSLine />
                        </a>
                        <a
                          href="#"
                          style={{
                            display: Comfort ? "block" : "none",
                          }}
                          className="arrow-up"
                        >
                          <IoIosArrowUp />
                        </a>
                      </div>
                    </div>

                    <div
                      className="off-screen-menu"
                      style={{
                        display: Comfort ? "block" : "none",
                      }}
                    >
                      <div className="spacification-section">
                        {i.Comfort.Form_Factor ? (
                          <div className="row-one">
                            <p>Form Factor:</p>
                            <p>{i.Comfort.Form_Factor}</p>
                          </div>
                        ) : null}

                        {i.Comfort.Controls ? (
                          <div className="row-one">
                            <p>Controls: </p>
                            <p>{i.Comfort.Controls}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Spacification;
