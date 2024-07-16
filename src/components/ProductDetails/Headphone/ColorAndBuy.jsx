
import Data from "../../assets/data/product_details.json"


const ColorAndBuy = () => {
  return (
    <div className="color-and-buy-container-section">
      {
        Data.product_details.map((item) => (
          <div className="buy-and-color-container">
            <div className="color-container">
              <h2>Material</h2>
              <button>{item.Type[0].type}</button>
              <h5><p>Color:</p>
                <span>{item.Type[0].Metal[0].color}</span>
              </h5>
              <div className="image-of-product">
                <img src={item.Type[0].image} alt="" />
              </div>
            </div>

            <div className="quntity-and-buy-container">
              <h2>Quantity</h2>

              <div className="quantity-buy-section">
               

                  <div className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                
                </div>
                <div className="buy-container">
                  <button>Buy Now</button>

                </div>
              </div>


            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ColorAndBuy