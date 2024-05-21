import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

import './App.css'
import Header from './layout/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      {/* <Route path="/About" element={<About/>} />
      <Route path="/Discover" element={<Discover/>} />
      <Route path="/Donate" element={<Donate/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} /> */}
    </Routes>
    <Home/>
     
    </>
  )
}

export default App
