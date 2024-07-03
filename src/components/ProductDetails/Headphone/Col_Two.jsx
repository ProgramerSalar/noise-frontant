import React from 'react'

const Col_Two = ({content_Image}) => {
  return (
    <div>
        {
            content_Image.map((i) => {
              // console.log("i", i.content_1)

              i.content_1.map((i) => {
                console.log("i", i)
                return(
                  <div className="product-overview-image">

                    <div>
                      <img src={i} alt="img" />
                    </div>

                  </div>
                )
              })
              
              
                
               
            })
        }
    </div>
  )
}

export default Col_Two