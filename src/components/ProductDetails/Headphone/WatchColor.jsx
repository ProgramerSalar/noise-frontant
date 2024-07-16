import React from 'react'
import CrouselProduct from './CrouselProduct'

const WatchColor = ({imgs = []}) => {
    // console.log("colorType",imgs)
  return (
    <div>
        {
            imgs.map((i, index) => {
        
                console.log("Colory-TYpe",i.color_type)
                return(
                    <div>
                    <h2>{i.color_type}</h2>
                    <img src={i.image} style={{width:"20rem"}} alt="img" />
                    {/* <img src={i.Pitch_Black} alt="img" /> */}


                    <CrouselProduct carouselImages={i} />



                    </div>
                )
            })
        }

        
    </div>
  )
}

export default WatchColor