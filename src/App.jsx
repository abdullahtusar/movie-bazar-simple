import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';


function App() {
  return (
    <div className="App container">
      <div className="bg-light m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row m-auto text-center">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="sideCart col-md-4 mt-3 card">
          <SideCart></SideCart>
        </div>
      </div>
      <div className='container'>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
