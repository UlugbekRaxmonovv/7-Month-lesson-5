import React from 'react';
import Navbar from '../../componint/Navbar/Navbar';
import Main from '../../componint/Main/Main';
import Prodact from '../../componint/Prodact/Prodact';
import Bootom from '../../componint/Bottom/Bootom';
import BootomTop from '../../componint/BootomTop/BootomTop';
import Footer from '../../componint/Footer/Footer';
import {useGetProductsQuery} from '../../componint/content/prodactApi'


const Home = () => {
  const {data,isLoading,error,isError} = useGetProductsQuery()
    return (
        <div>
            <Main/>
            <Prodact data={data?.products}/>
            <Bootom/>
            <BootomTop/>
            <Footer/>
            
        </div>
    );
}

export default Home;
