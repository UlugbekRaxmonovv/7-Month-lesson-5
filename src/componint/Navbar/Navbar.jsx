import React,{useState} from 'react';
import rasm1 from '../../assets/img/mokom.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Navbar.css'
import {useGetSorchProdactQuery} from '../content/prodactApi'
const Navbar = () => {
    // const [search, setSearch] = useState(false);
    const [value,setValue] =useState('')
    const {data} = useGetSorchProdactQuery({q:""})


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
                    <div className="navbar_sorch">
                        <input 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() =>setSearch(true)}
                        onBlur={() =>setSearch(false)}
                        type="text" placeholder='Search.........' />
                        <button>Button</button>
                        {
                            value.trim() ?  <div className="modul">
                             {
                                data?.products.map((inx)=>(
                                    <div key={inx.id}>
                                   <Link to={`/product/:id`}>
                                   <img src={inx.images[0]} width={50} alt="" />
                                   <span>{inx.title}</span>
                                   </Link>
                                   </div>
                                )
                            )
                             }
                            </div>
                            : <></>
                        }
                       
                    </div>
              
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
