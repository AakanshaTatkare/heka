import React from 'react';
import './Navbar.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar " style={{padding: '25px'}}>
         <div className="logo">
          {/* <img src="logo.png" alt="Logo" />  */}
        </div> 
        <ul className="navmenu ">
          <li className="nav-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item mx-6">
            <Link to="/AboutUs">About Us</Link>
            {/* <a href="#">About Us</a> */}
          </li>
          <li className="nav-item dropdown">
            <Link to="/ourservices">Our Services</Link>
            {/* <a href="#">Our Services</a> */}
            <ul className="dropdown-menu">
              <li><a href="#">Service 1</a></li>
              <li><a href="#">Service 2</a></li>
              <li><a href="#">Service 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="./pages/Gallery">Gallery</Link>
            {/* <a href="#">Gallery</a> */}
          </li>
          <li className="nav-item">
            <Link to ="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <a href="#">Login/SignUp</a>
          </li>
        </ul>
        <button className="enquiry-button ">Enquiry</button>
      </div>
      




    </>

  );
};

export default Navbar;
