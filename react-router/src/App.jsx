import { useState } from 'react'
//Importo Routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importo le pagine
import Homepage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/product' Component={Product} />
          <Route path='/about' Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App