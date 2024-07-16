import React, { useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { useProductContext } from "../../context/productContext";




const FAQ = ({name}) => {










  const [aboutMenuVisible, setAboutMenuVisible] = useState(true);
  const [connectivityMenuVisible, setConnectivityMenuVisible] = useState(false);
  const [compatibilityMenuVisible, setCompatibilityMenuVisible] =
    useState(false);
  const [BatteryChargingMenuVisible, setBatteryChargingMenuVisible] =
    useState(false);
  const [GettingStartedMenuVisible, setGettingStartedMenuVisible] =
    useState(false);
  const [TroubleShootingMenuVisible, setTroubleShootingMenuVisible] =
    useState(false);
  const [WarrantyRegistrationoMenuVisible, setWarrantyRegistrationMenuVisible] =
    useState(false);

  const toggleAboutMenu = () => {
    setAboutMenuVisible(!aboutMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleCompatibilityMenu = () => {
    setCompatibilityMenuVisible(!compatibilityMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleBatteryChargingMenu = () => {
    setBatteryChargingMenuVisible(!BatteryChargingMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleGettingStartedMenu = () => {
    setGettingStartedMenuVisible(!GettingStartedMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleTroubleShootingMenu = () => {
    setTroubleShootingMenuVisible(!TroubleShootingMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleWarrantyRegistrationoMenu = () => {
    setWarrantyRegistrationMenuVisible(!WarrantyRegistrationoMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  return (
    <div className="faq-container">
      <h1 className="heading-tag-faq">FAQs</h1>
      <nav>
        {/* About parts here */}
        <div className="ham-menu">
          <div className="about-the-product" onClick={toggleAboutMenu}>
            <h3>About the product</h3>
            <div className="icon">
              <a
                href="#"
                style={{ display: aboutMenuVisible ? "none" : "flex" }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{ display: aboutMenuVisible ? "block" : "none" }}
                className="arrow-up"
              >
                <IoIosArrowUp />
              </a>
            </div>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: aboutMenuVisible ? "block" : "none" }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Can I use {name} as single earbud while listening to
                music ?
              </h4>
              <p className="faq-answer">
                Yes, you can. Place one earbud inside the case and use the other
                one.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Do {name} have a touch feature to change tracks ?
              </h4>
              <p className="faq-answer">
                Yes, you can change tracks by tapping the earbuds. Touch and
                hold the left earbud for 2 seconds to go to the previous <br />
                track. Touch and hold the right earbud for 2 seconds to go to
                the next track..
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">How is the calling?</h4>
              <p className="faq-answer">
                {name} delivers a good call quality experience. It also
                comes with Environmental noise cancellation with quad mic that
                ensures clearer communication
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                During calls is the audio available in both ears?
              </h4>
              <p className="faq-answer">
                Yes, {name} supports stereo mode during calls and music
                as well.{" "}
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Does it announce the caller's name or number on incoming calls?
              </h4>
              <p className="faq-answer">No, it doesn’t.</p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                What is the exact use of that case?
              </h4>
              <p className="faq-answer">
                The case works as a charging and holding case for {name}
                on the go.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">Does it have noise cancellation?</h4>
              <p className="faq-answer">
                Yes, it comes with active noise <br />
                cancellation that cancels noise up to 25dB. It also comes with
                ENC that's further supported by quad mic system.{" "}
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Are {name} earbuds waterproof?
              </h4>
              <p className="faq-answer">
                {name} earbuds are IPX5 water-resistant. However, the
                buds need to be completely dried before placing them back in the
                case to maintain their long life.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">What are the colour options?</h4>
              <p className="faq-answer">
                {name} are available in 4 colours – Jet black and Calm
                beige, Aurora green and Glacier blue.{" "}
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        {/* Compability parts here  */}
        <div className="ham-menu">
          <div className="about-the-product" onClick={toggleCompatibilityMenu}>
            <h3>Compatibility</h3>
            <div className="icon">
              <a
                href="#"
                style={{ display: compatibilityMenuVisible ? "none" : "flex" }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{ display: compatibilityMenuVisible ? "block" : "none" }}
                className="arrow-up"
              >
                <IoIosArrowUp />
              </a>
            </div>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: compatibilityMenuVisible ? "block" : "none" }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Are {name} compatible with iPhones?
              </h4>
              <p className="faq-answer">
                Yes, they are compatible with iPhones.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Are Buds VS 102 Pro compatible with Android smartphones?
              </h4>
              <p className="faq-answer">
                Yes, they are compatible with Android smartphones.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Can {name} be connected to a laptop/computer?
              </h4>
              <p className="faq-answer">
                Yes, {name} can be connected to the laptop/computer as
                long as the latter is equipped with BT connectivity provision.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">Do they support BT 4.2?</h4>
              <p className="faq-answer">
                They are best suited with BT v5.3. However, they support
                smartphones with BT v4.2 as well.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                What is the BT range from the phone?
              </h4>
              <p className="faq-answer">
                The BT range is up to 10 metres without any obstacle.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">Can I use Siri/Google Assistant?</h4>
              <p className="faq-answer">
                Yes, you can use Siri & Google Assistant.
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        {/* Battery & charging parts here  */}
        <div className="ham-menu">
          <div
            className="about-the-product"
            onClick={toggleBatteryChargingMenu}
          >
            <h3>Battery & charging </h3>
            <div className="icon">
              <a
                href="#"
                style={{
                  display: BatteryChargingMenuVisible ? "none" : "flex",
                }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{
                  display: BatteryChargingMenuVisible ? "block" : "none",
                }}
                className="arrow-up"
              >
                <IoIosArrowUp />
              </a>
            </div>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: BatteryChargingMenuVisible ? "block" : "none" }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">What is the battery backup?</h4>
              <p className="faq-answer">
                The battery backup of the earbuds is up to 6 hours on a single
                charge and backed with the charging case, they provide a total
                playtime of up to 34 hours.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                How much time does it take to charge {name}?
              </h4>
              <p className="faq-answer">
                {name} takes up to 45 minutes to charge.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Can {name} be charged without putting them into the
                charging case?
              </h4>
              <p className="faq-answer">
                No, they cannot be charged without the charging case.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                What to do in case the charging case is not charging?
              </h4>
              <p className="faq-answer">
                You can reach out to us at the following link:
                (https://www.gonoise.com/pages/register-your-complaint)
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                How do I check the {name} battery level?
              </h4>
              <p className="faq-answer">
                You can check the battery level on your smartphone. Go to the
                notification bar and look at the BT icon. The battery level is
                mentioned under it. You can also check the battery level of the
                charging case on the case.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Can I charge {name} with my PC/laptop?
              </h4>
              <p className="faq-answer">
                Yes, you can charge the earbuds with your PC/laptop. Though it
                is advisable to use the charging cable provided with the device.
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        {/*Getting started  */}
        <div className="ham-menu">
          <div className="about-the-product" onClick={toggleGettingStartedMenu}>
            <h3>Getting Started </h3>
            <div className="icon">
              <a
                href="#"
                style={{ display: GettingStartedMenuVisible ? "none" : "flex" }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{
                  display: GettingStartedMenuVisible ? "block" : "none",
                }}
                className="arrow-up"
              >
                <IoIosArrowUp />
              </a>
            </div>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: GettingStartedMenuVisible ? "block" : "none" }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">
                How to turn {name} on and off?
              </h4>
              <p className="faq-answer">
                The earbuds will turn on automatically when you open the
                charging case and turn off by placing them inside the charging
                case and closing the lid.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                How to pair {name} with your smartphone?
              </h4>
              <p className="faq-answer">
                Make sure that the earbuds are charged. Open the charging case.
                Turn on the BT on your device and open the BT menu. Now select
                Add device and from the list of devices, select Noise Buds VS102
                Pro.
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        {/* Troubleshooting  */}
        <div className="ham-menu">
          <div
            className="about-the-product"
            onClick={toggleTroubleShootingMenu}
          >
            <h3>TroubleShooting </h3>
            <div className="icon">
              <a
                href="#"
                style={{
                  display: TroubleShootingMenuVisible ? "none" : "flex",
                }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{
                  display: TroubleShootingMenuVisible ? "block" : "none",
                }}
                className="arrow-up"
              >
                <IoIosArrowUp />
              </a>
            </div>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: TroubleShootingMenuVisible ? "block" : "none" }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Only one bud is working, what do I do?
              </h4>
              <p className="faq-answer">
                Check if the non-working earbud is charged and connected to your
                device. Try to reset the earbuds and connect them, if they still
                don’t work, please raise a support ticket at support.gonoise.in.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">How to reset {name}?</h4>
              <p className="faq-answer">
                On your paired devices, delete Noise {name} from the
                list of paired devices in the BT menu. Open the charging case.
                Take out the earbuds. Press and hold the earbud for 10 seconds.
                Repeat the process with the other earbud. Place the earbuds
                <br />
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Is a single earbud available if one of them goes missing?{" "}
              </h4>
              <p className="faq-answer">
                No, single earbuds are not available. No, single earbuds are not
                available.
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        {/* Warranty registration  */}
        <div className="ham-menu">
          <div
            className="about-the-product"
            onClick={toggleWarrantyRegistrationoMenu}
          >
            <h3>Warranty registration </h3>
            <div className="icon">
              <a
                href="#"
                style={{
                  display: WarrantyRegistrationoMenuVisible ? "none" : "flex",
                }}
              >
                <RiArrowDownSLine />
              </a>
              <a
                href="#"
                style={{
                  display: WarrantyRegistrationoMenuVisible ? "block" : "none",
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
              display: WarrantyRegistrationoMenuVisible ? "block" : "none",
            }}
          >
            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Is there a warranty for this product?
              </h4>
              <p className="faq-answer">
                Yes, there is a 1-year manufacturing warranty from the date of
                delivery of the product.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Where do I register for the product warranty?
              </h4>
              <p className="faq-answer">
                Please follow the link to register for the warranty, here.
              </p>
            </div>

            <div className="about-the-product-contant">
              <h4 className="faq-question">
                Is a single earbud available if one of them goes missing?{" "}
              </h4>
              <p className="faq-answer">
                No, single earbuds are not available. No, single earbuds are not
                available.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FAQ;
