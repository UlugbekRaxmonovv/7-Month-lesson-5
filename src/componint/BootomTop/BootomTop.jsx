import React from 'react';
import './BootomTop.css'
import rasm1 from '../../assets/img/kar.png'
import rasm2 from '../../assets/img/nishon.png'
import rasm3 from '../../assets/img/price.png'


const data =[
    {
        id:1,
        img:rasm1,
        h1:'Fast Delivery',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:2,
        img:rasm3,
        h1:'Cheap Price',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:3,
        img:rasm2,
        h1:'Premium Quality',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

let links = data?.map((el) =>(
    <div className="bootom-top_right" key={el.id}>
        <div className="logo">
        <img src={el.img} alt="" /> 
        </div>
         <h1>{el.h1}</h1>
         <p>{el.p}</p>         
    </div>
))
const BootomTop = () => {
    return (
        <div className='container'>
            <section>
            <div className="bootm_lift">
                    <div className="bootom_row">
                </div>
                Why Choose US
                    </div>
                    <div className="bootom-top">
                     {links}
                   </div>
            </section>
            
        </div>
    );
}

export default BootomTop;
