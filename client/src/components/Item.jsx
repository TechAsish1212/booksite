import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { TbShoppingBagPlus } from "react-icons/tb";


const Item = ({book,fromHero}) => {

  const {navigate,currency }=useContext(ShopContext);
  return book ? (
    <div className={`overflow-hidden sm:p-4 ${fromHero ? "bg-white":"sm:bg-primary"} rounded-xl`}>
      {/* image */}
      <div className='overflow-hidden rounded-xl shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.1)]'>
        <img src={book.image} alt="book.name" className='rounded-lg' />
        {/* info */}
        <div className='pt-4'>
          <div className='flexBetween gap-2'>
            <h4 className='h5 line-clamp-1'>{book.name}</h4>
            <p className='text-secondary bold-15'>{currency} {book.price}.00</p>
          </div>
          <div className='flex justify-between items-start gap-2 mt-1'>
            <p className='line-clamp-2'>{book.description}</p>
            <button className=' cursor-pointer'>
              <TbShoppingBagPlus className='text-xl'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  ):(
    <div className='p-5 bg-red-600 text-sm rounded-md'>No Books Found</div>
  )
}

export default Item