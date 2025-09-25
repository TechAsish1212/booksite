import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import CategoryShop from './pages/CategoryShop.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Seller from './pages/Seller.jsx'
import Cart from './pages/Cart.jsx'
import AddressForm from './pages/AddressForm.jsx'



const App = () => {
  return (
    <main>
      <Header/>
      <Toaster position='bottom-right' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:category' element={<CategoryShop />} />
        <Route path='/shop/:category/:id' element={<ProductDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/address-form' element={<AddressForm />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App