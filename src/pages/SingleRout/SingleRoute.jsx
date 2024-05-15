import React,{useState} from 'react';
import './SingleRout.css'
import { useGetDetialProductQuery } from '../../componint/content/prodactApi';
import { useParams } from 'react-router-dom';
import Footer from '../../componint/Footer/Footer';
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { VscRemote } from "react-icons/vsc";

const SingleRoute = () => {
    let {id} = useParams()
    let {data,isError,isLoading,error} =useGetDetialProductQuery(id);

    const[count,setCount] = useState(0)
    const onclick = () =>{
      setCount(count + 1)
    }
    const go = () =>{
      setCount(count - 1)
    }
    return (
       <>
        <div className='container'>
          <div className="singli_rout">
            <div className="sinli_now">
          <div className="all_alt">
          <img className="all_alt_img" src={data?.thumbnail} alt="" />
          </div>
            <div className="img_">
            <div className="img_row">
                    <img src={data?.images[0]} alt="" />
                </div>
                <div className="img_row">
                    <img src={data?.images[1]} alt="" />
                </div>
                <div className="img_row">
                    <img src={data?.images[2]} alt="" />
                </div>
                <div className="img_row">
                    <img src={data?.images[3]} alt="" />
                </div>
            </div>
            </div>
            <div className="sinli_now">
                <div className="p-1">
                <p>Sale Off</p>
                </div>
                <h1>Seeds of Change Organic Quinoa, Brown</h1>
                <div className="star">
                    <div className="star-all">
                    <FaStarHalfAlt />
                    <FaStarHalfAlt />
                    < FaStar/>
                    < FaStar/>
                    
                    </div>
                    <div className="star-all">
                        <p>(32 reviews)</p>
                    </div>
                </div>

                <div className="price">
<div className="price-all">
  <h1>{data?.price}</h1>
</div>
<div className="price-all">
  <span>26% Off</span>
  <p>$52</p>
</div>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
odio minus dolore impedit fuga eum eligendi.</p>

<div className="sizi">
<div className="sizi-all1">
    <p>Size / Weight:</p>
  </div>
  <div className="sizi-all">
    <p>50g</p>
  </div>
  <div className="sizi-all">
    <p>60g</p>
  </div>
  <div className="sizi-all">
    <p>80g</p>
  </div>
  <div className="sizi-all">
    <p>100g</p>
  </div>
  <div className="sizi-all">
    <p>150g</p>
  </div>
</div>


<div className="column">
<div className="span-link">
<div className="span-son">
     <span>{count}</span>
  </div>
 <div className="span-btn">
 <div className="span-son">
    <button onClick={onclick}><VscChevronUp /></button>
  </div>
  <div className="span-son">
     <button disabled={count <= 0} onClick={go}><VscChevronDown /></button>
  </div>
 </div>
</div>
<div className="kart">
<div className="kart-all">
  <IoCartOutline />
  </div>
  <div className="kart-all">
  <p>Add to cart</p>
  </div>
</div>

<div className="layk">
<GiSelfLove />
</div>
<div className="layk">
<VscRemote />
</div>
</div>

            </div>
          </div>
         
        </div>
        <Footer/>
       </>
    );
}

export default SingleRoute;
