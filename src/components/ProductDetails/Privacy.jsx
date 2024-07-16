import React from 'react'
import one from "../../assets/product_details/privacy/one.png"
import two from "../../assets/product_details/privacy/two.png"
import three from "../../assets/product_details/privacy/three.png"


const Privacy = () => {
    return (

        <div className="privicy-container">
            <div className="">
                <img src={one} alt="" />
                <p>7 day <br /> replacement</p>
            </div>
            <div className="">
                <img src={two} alt="" />
                <p>1 year <br /> warranty</p>
            </div>
            <div className="">
                
                <img src={three} alt="" />
                <p>Secure <br /> payments</p>
            </div>
        </div>



    )
}

export default Privacy