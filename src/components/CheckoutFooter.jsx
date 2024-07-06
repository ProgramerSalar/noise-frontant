import React from 'react'
import gokwik from "../assets/checkout_footer/gokwik.jpeg"
import pcddss from "../assets/checkout_footer/pcd-dss.png"
import secure_payment from "../assets/checkout_footer/secure_payment.jpg"
import verifiedUser from "../assets/checkout_footer/verified-user.jpeg"


const CheckoutFooter = () => {
  return (
    <div className="footer-checkout-section">
    <p>By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p>
   
    <div className="pci-dss-certified">
      <img src={pcddss} alt="" />
      <img src={secure_payment} alt="" />
      <img src={verifiedUser} alt="" />
      <img src={gokwik} alt="" />
    </div>
    <p className='t-and-c'>T&C | Privacy | ab70b559</p>
  </div>
  )
}

export default CheckoutFooter