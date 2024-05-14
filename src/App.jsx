import { useState } from 'react'
import Navbar from './componint/Navbar/Navbar'
import './App.css'
import Bootom from './componint/Bottom/Bootom'
import Main from './componint/Main/Main'
import Prodact from './componint/Prodact/Prodact'
import {useGetProductsQuery} from './componint/content/prodactApi'
import BootomTop from './componint/BootomTop/BootomTop'
import Footer from './componint/Footer/Footer'

function App() {
  const {data,isLoading,error,isError} = useGetProductsQuery()
  return (
    <>
<Navbar/>
<Main/>
<Prodact data={data?.products}/>
<Bootom/>
<BootomTop/>
<Footer/>
    </>
  )
}

export default App
