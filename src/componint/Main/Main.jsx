import React from 'react';
import rasm1 from '../../assets/img/fon.png'
import './Main.css'

const Main = () => {
    return (
        <div className='container'>
            <div className="main">
                <div className="main-all">
                    <div className="main-row"> 
                    <h1>Mobile</h1>
                     <h2>Backcover</h2>
                     <h3>Tempered Glass</h3>
                     <div className="btn">
                        <button>Shop all !</button>
                     </div></div>
                </div>
                <div className="main-all">
                    <img src={rasm1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;
