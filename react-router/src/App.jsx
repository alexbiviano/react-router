import { React } from 'react'

//Importo Routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importo le pagine
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import DetailProduct from './pages/Product/DetailProduct';
<pages />
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/product'>
            <Route index Component={Product} />
            <Route path='/product/:id' Component={DetailProduct} />
          </Route>
          <Route path='/about' Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App