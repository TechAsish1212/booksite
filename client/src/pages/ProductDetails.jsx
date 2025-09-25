import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useParams } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { TbHeart } from 'react-icons/tb';
import { TbTruckDelivery } from "react-icons/tb";
import ProductDescription from '../components/ProductDescription';
import ProductFeatures from './ProductFeatures';
import RelatedBooks from '../components/RelatedBooks';



const ProductDetails = () => {
  const { books, currency, addToCart, getCartCount, updateQuantity, getCartAmount,cartItems } = useContext(ShopContext);
  const { id } = useParams();

  const book = books.find((b) => b._id === id)
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (book) {
      setImage(book.image[0])
    }
  }, [book])

  useEffect(()=>{
    console.log(cartItems);
  },[addToCart])

  return (
    book && (
      <div className='max-padd-container py-16 pt-20'>
        <p>
          <Link to={'/'}>Home</Link> /
          <Link to={'/shop'}>Shop</Link> /
          <Link to={`/shop/${book.category}`}>{book.category}</Link> /
          <span>{book.name}</span>
        </p>
        {/* book details */}
        <div className='flex gap-10 flex-col xl:flex-row my-6'>
          {/* image */}
          <div className='flex gap-x-2 max-w-[433px] rounded-xl'>
            <div className='flex-1 flexCenter flex-col gap-[7px] flex-wrap'>
              {book.image.map((item, i) => (
                <div key={i}>
                  <img onClick={() => setImage(item)} src={item} alt="bookImage" className='rounded-lg overflow-hidden' />
                </div>
              ))}
            </div>
            <div className='flex flex-[4]'>
              <img src={image} alt="bookImage" className='rounded-lg overflow-hidden ' />
            </div>
          </div>
          {/* info */}
          <div className='px-5 py-3 w-full bg-primary rounded-xl pt-8'>
            <h3 className='h3 leading-none'>{book.name}</h3>
            <div className='flex items-center gap-x-2 pt-2'>
              <div className='flex gap-x-1 text-yellow-500'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
              <p className='medium-22'>(22)</p>
            </div>
            <div className='h4 flex items-baseline gap-2 my-2'>
              <h3 className='h3 line-through text-secondary'>{currency} {book.price}.00</h3>
              <h4 className='h4'>{currency} {book.offeredPrice}.00</h4>
            </div>
            <p className='MAX-W-[555PX]'>{book.description}</p>
            <div className='flex items-center gap-x-4 mt-6'>
              <button onClick={()=>addToCart(book._id)} className='btn-dark sm:w-1/2 flexCenter gap-x-3 capitalize !rounded-md'><HiShoppingCart />Add to cart</button>
              <button className='btn-secondary !rounded-md'><TbHeart className='text-xl' /></button>
            </div>
            <div className='flex items-center gap-x-2 mt-3'>
              <TbTruckDelivery className='text-lg' />
              <span className='medium-14'>Free Delivery on orders over $500</span>
            </div>
            <hr className='my-3 w-2/3' />
            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
              <p>Authenticy You can Trust</p>
              <p>Enjoy Cash On Delivery for Your Convenience</p>
              <p>Easy Returns and Exchange within 3 days</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedBooks book={book} id={id} />
      </div>
    )

  )
}

export default ProductDetails