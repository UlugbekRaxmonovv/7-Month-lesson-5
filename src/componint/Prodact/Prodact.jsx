import React from 'react';
import './Prodact.css'

const Prodact = ({data}) => {
    return (
        <div className='container'>
           <div className="wrappir">
            {
             data?.map((el) =>(
                <div className="cart" key={el.id}>
                    <div className="btn1">
                    sale !
                    </div>
                    <img src={el.images[0]} alt="" />
                    <div className="gap">
                        <h1>{el.title}</h1>
                        <p>LKR{el.price}</p>
                    </div>
                </div>

             ))
            }
           </div>
        </div>
    );
}

export default Prodact;
