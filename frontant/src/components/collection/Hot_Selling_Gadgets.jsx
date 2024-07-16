import React from 'react'
import { useProductContext } from '../../context/productContext'
import Loader from '../Loader'
import Navbar from '../NavBar'
import Hot_Selling_Gadgets_card from './Hot_Selling_Gadgets_card'



const Hot_Selling_Gadgets = () => {

    const { isLoading, featureProducts} = useProductContext()
    console.log("feature-products", featureProducts)

    if(isLoading){
        return <Loader/>

    }



  return (
    <div className="product-collection" >

        <Navbar/>

        <div className="heading">
        <h1>Bestseller Gadgets Available</h1>
      </div>

      <div className="product-details-container">

        {
            featureProducts.map((i) => (

                <Hot_Selling_Gadgets_card
                key={i.id}
                {...i}
                />
            ))
        }
      </div>




    </div>
  )
}

export default Hot_Selling_Gadgets