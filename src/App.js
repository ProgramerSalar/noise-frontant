import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Offer from "./components/offer/offer"
import Timer from "./pages/Timer"
import Collection from "./pages/Collection"
// import ProductDetails from "./pages/ProductDetails"
import ProductDetails from "./components/ProductDetails/Headphone/ProductDetails"
import Hot_Selling_Gadgets from "./components/collection/Hot_Selling_Gadgets"
import CategoryDetailsitem from "./components/CategoryDetailsitem"
import AddTOCart from "./pages/AddTOCart"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offer" element={<Offer/>} />
      <Route path="/timer" element={<Timer/>} />
      <Route path="/collection" element={<Collection/>} />
      {/* <Route path="/product-details" element={<ProductDetails/>} /> */}
      <Route path="/product-details/:id" element={<ProductDetails/>} />
      <Route path="/hot-selling-product-collection" element={<Hot_Selling_Gadgets/>} />
      <Route path="/category-card-details-item" element={<CategoryDetailsitem/>} />
      <Route path="/add-to-cart-noise" element={<AddTOCart/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App