import React from 'react';
import rasm1 from '../../assets/img/mokom.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
          <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <a href="">Shop All</a>
                        </li>
                        <li>
                        <a href="#box" className="">About Us</a>
                           
                        </li>
                    </ul>
                    <img src={rasm1} alt="" />
              
                        <div className="nav_itim">
                       <Link to={'/contact'}>Contact</Link>
                        <div className="all">
                        <div className="nav_link">
                        <button>Search Product</button>
                        </div>
                        <div className="nav_link">
                        <IoSearch />
                        </div>
                        </div>
                  </div>
                </nav>
            </div>
          </header>
        </div>
    );
}

export default Navbar;
