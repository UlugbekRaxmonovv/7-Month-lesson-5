import { useState } from 'react'
import Navbar from './componint/Navbar/Navbar'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SingleRoute from './pages/SingleRout/SingleRoute'
import Contact from './pages/Contact/Contact'
function App() {
  return (
    <>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product/:id" element={<SingleRoute/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>

    </>
  )
}

export default App
