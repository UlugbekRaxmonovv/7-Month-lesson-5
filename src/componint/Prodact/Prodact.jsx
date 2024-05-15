import React from 'react';
import './Prodact.css'
import { Link } from 'react-router-dom';

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
                    <Link to={`/product/${el.id}`}>
                    <img src={el.images[0]} alt="" />
                    </Link>
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
