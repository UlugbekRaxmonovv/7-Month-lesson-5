import React from 'react';
import './Bootom.css'
import rasm1  from '../../assets/img/phon.png';
import rasm2 from '../../assets/img/phon1.png';
import rasm3 from '../../assets/img/phon2.png';
 const Bootom = () => {
    return (
        <div className='container'>
          <section id='box'>
          <div className="bootom">
                <div className="bootom_row">
                </div>
                about us
   <h1>If you’re looking for a Premium Quality
Tempered Glass or Back-cover for
your Device </h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
</p>
    

            </div>
    <div className="imagi">
        <img src={rasm1} alt="" />
    </div>
    <div className="bootom-lift">
        <div className="bottom-right">
     <h1>Shop Premium 
Tempered Glass in wholesale Price !</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

LKR : 299
</p>
<div className="btn2">
                        <button>Shop Tempered Glass </button>
                     </div>
        </div>
        <div className="bottom-right">
            <img src={rasm2} alt="" />
         </div>
         <div className="bottom-right">
            <div className="alt">
            <img src={rasm3} alt="" />
            </div>
         </div>
    </div>

          </section>


          
        </div>
    );
}

export default Bootom;
