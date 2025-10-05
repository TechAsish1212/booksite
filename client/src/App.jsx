import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import MyOrders from './pages/MyOrders.jsx'
import { ShopContext } from './context/ShopContext.jsx'
import Login from './pages/Login.jsx'
import Sidebar from './components/admin/Sidebar.jsx'
import AdminLogin from './components/admin/AdminLogin.jsx'
import AddProducts from './pages/admin/AddProducts.jsx'
import ProductList from './pages/admin/ProductList.jsx'
import Order from './pages/admin/Order.jsx'

const App = () => {
  const { showUserLogin, isAdmin } = useContext(ShopContext);
  const isAdminPath = useLocation().pathname.includes('admin');

  return (
    <main>
      {
        showUserLogin && <Login />
      }
      {!isAdminPath && <Header />}
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
        <Route path='/my-orders' element={<MyOrders />} />
        {/* admin */}
        <Route path='/admin' element={isAdmin ? <Sidebar /> : <AdminLogin />} >
          <Route index element={isAdmin ? <AddProducts /> : null} />
          <Route path='list' element={<ProductList />} />
          <Route path='orders' element={<Order />} />
        </Route>
      </Routes>
      {!isAdminPath && <Footer />}
    </main>
  )
}

export default App