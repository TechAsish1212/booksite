import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyBooks } from '../assets/assets'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const currency = import.meta.env.VITE_CURRENCY;
  const [cartItems, setCartItems] = useState({});
  const [method, setMethod] = useState("COD");
  const [showUserLogin, setShowUserLogin] = useState("")
  const delivery_charges = 10;

  // fetch all books 
  const fetchBooks = () => {
    setBooks(dummyBooks)
  }

  // adding books to cart
  const addToCart = (itemId) => {
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };


  // getting total cart items
  const getCartCount = () => {
    let totalCount = 0
    for (const itemId in cartItems) {
      try {
        if (cartItems[itemId] > 0) {
          totalCount += cartItems[itemId]
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  }

  // update the quantity of item
  const updateQuantity = (itemId, quantity) => {
    const cartData = { ...cartItems }
    cartData[itemId] = quantity;
    setCartItems(cartData);
  }

  // getting total cart amount 
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = books.find((book) => book._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.offeredPrice * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const value = { books, navigate, user, setUser, currency, searchQuery, setSearchQuery, cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount, method, setMethod, delivery_charges, showUserLogin, setShowUserLogin }
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider