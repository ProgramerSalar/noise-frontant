import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import logo from "../assets/Image/logo.png";
import { useCartContext } from "../context/Cart_Context";

const Navbar = () => {
  const { total_item, cart } = useCartContext();

  const countId = cart.map((i) => i.id);
  // console.log(countId);

  // const cartItems = ['2', '5', '4', '5', '2'];
  const cartItems = total_item;
  let sum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    // Convert each item to a number and add it to the sum
    sum += parseInt(cartItems[i]);
  }

  //   console.log("Sum of 2 and 5:", sum);

  
  const myArray = countId; // Assuming countId is an array
  const targetString = "1";

  let count = 0;

  // Count occurrences of '1' in the array
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].includes(targetString)) {
      count++;
    }
  }

  // Check if sum is zero and log the appropriate array
  // if (sum === 0) {
  //   console.log("zero");
  //   console.log("countArray", count);
  // } else {
  //   console.log("non zero");
  //   console.log(cartItems); // Assuming cartItems is defined elsewhere
  // }

  // console.log(`count  item: ${count}`);

  useEffect(() => {}, [sum, count]);

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" className="logo-name" />
          </a>
        </div>
        <nav>
          <ul className="ul-tag">
            <li className="li-tag">
              <a href="#">Products</a>
            </li>
            <li className="li-tag">
              <a href="#">Luna Ring</a>
            </li>
            <li className="li-tag">
              <a href="#">Gift Store</a>
            </li>
            <li className="li-tag">
              <a href="#">Support</a>
            </li>
            <li className="li-tag">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-button-in-cart" >
          <div className="col-1">
            <a className="navbar-icon" href="">
              <CiSearch />
            </a>
            <a className="navbar-icon" 
            // href="/add-to-cart-noise"
            >
              {/* <IoBagOutline /> */}

              {/* {sum === 0 ? <span className="total-item-in-cart">{count}</span> : <span>{sum}</span>} */}
            </a>
            <a className="navbar-icon" href="">
              <IoPersonOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
