import React from 'react';
import rasm1 from '../../assets/img/footir.png'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div>
                <footer>
                <div className="container">
                    <div className="footir-all">
                        <div className="footir-row">
                            <ul  className='ul_link' >
                                <li>
                                    <div className="footir-alt">
                                      <img src={rasm1} alt="" />
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="footir-row">
                            <ul className='ul_link'>
                                <h1>Contact us</h1>
                                <li>
                                      <a href="" className="">E:info@example.com</a>
                                </li>
                                <li>
                                      <a href="" className="">P:+94 7670000000</a>
                                </li>
                                <li>
                                      <a href="" className="">A:123 Hospital rd</a>
                                </li>
                                <li>
                                    <a href="" className=""> Kalubowila, Dehiwela</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footir-row">
                            <ul className='ul_link'>
                                <h1>Useful links</h1>
                                <li>
                                      <a href="" className="">Shop All </a>
                                </li>
                                <li>
                                      <a href="" className="">Back-cover</a>
                                </li>
                                <li>
                                      <a href="" className="">About Us</a>
                                </li>
                                <li>
                                    <a href="" className=""> Tempered Glass</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footir-row">
                            <ul>
                                <li>
                                    <div className="phon">
                                    <div className="phon-1"><FaPhoneSquareAlt /></div>
                                    <div className="phon-1">Whatsapp</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="phon">
                                    <div className="phon-1"><FaFacebookSquare /></div>
                                    <div className="phon-1">Facebook</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="phon">
                                    <div className="phon-1"><FaSquareInstagram /></div>
                                    <div className="phon-1">Instargram</div>
                                    </div>
                                </li>

                                <li>
                                    <div className="phon">
                                    <div className="phon-1"><li>
                                    <div className="phon">
                                    <div className="phon-1"><AiFillTikTok /></div>
                                    <div className="phon-1">Tik Tok</div>
                                    </div>
                                </li>
                                </div>
                                  
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div> </div>
                </footer> 

        </div>
    );
}

export default Footer;


