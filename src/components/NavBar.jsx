import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoBagOutline, IoPersonOutline } from 'react-icons/io5';
import logo from "../assets/Image/logo.png"


const Navbar = () => {









  return (
    

    <div className="nav-container">
    <div className="navbar">
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" className="logo-name"  />
                
              
            </a>
        </div>
        <nav>
            <ul className="ul-tag">
                <li className="li-tag"><a href="#">Products</a></li>
                <li className="li-tag"><a href="#">Luna Ring</a></li>
                <li className="li-tag"><a href="#">Gift Store</a></li>
                <li className="li-tag"><a href="#">Support</a></li>
                <li className="li-tag"><a href="#">Blogs</a></li>
            </ul>
        </nav>
        <div className="navbar-button">
            <div className="col-1">
                <a className='navbar-icon'  href=""><CiSearch /></a>
                <a className='navbar-icon' href=""><IoBagOutline /></a>
                <a className='navbar-icon' href=""><IoPersonOutline /></a>
            </div>

        </div>
    </div>

</div>
  )
}

export default Navbar;