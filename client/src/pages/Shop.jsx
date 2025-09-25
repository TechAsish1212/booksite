import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import Item from '../components/Item'
import { ShopContext } from '../context/ShopContext'
import { IoSearch } from "react-icons/io5";

const Shop = () => {
  const { books, searchQuery } = useContext(ShopContext)
  const [query, setQuery] = useState("")
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Use local query if it exists, otherwise fall back to searchQuery from context
    const activeQuery = query.length > 0 ? query : searchQuery;

    // First filter by inStock, then by search query if exists
    let filtered = books.filter((book) => book.inStock === true);
    
    if (activeQuery.length > 0) {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
        book.title?.toLowerCase().includes(activeQuery.toLowerCase())
      );
    }
    
    setFilteredBooks(filtered);
    setCurrPage(1)
  }, [books, searchQuery, query]); // Added query to dependency array

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  // Get current page items
  const startIndex = (currPage - 1) * itemsPerPage;
  const currentItems = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[currPage])

  return (
    <section className='max-padd-container py-16 pt-28'>
      {/* Title + Search */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 pb-10">
        <Title title1={"All"} title2={"Books"} />
        
        {/* Search box */}
        <div className="w-full md:w-auto">
          <div className='bg-primary text-[14px] font-medium pl-4 pr-2 py-2 rounded-full flex items-center justify-between gap-x-2'>
            <input
              type="text"
              placeholder='Search book...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='bg-transparent flex-1 text-sm outline-none placeholder:text-gray-400'
            />
            <IoSearch className='bg-secondary text-white rounded-full h-9 w-9 p-2 cursor-pointer border border-white hover:text-black transition-all duration-500' />
          </div>
        </div>
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8">
        {currentItems.length > 0 ? (
          currentItems.map((book) => (
            <Item key={book._id} book={book} />
          ))
        ) : (
          <h4 className="h4 col-span-full text-center text-gray-600">Oops! Nothing matched your search</h4>
        )}
      </div>
      
      {/* pagination */}
      {totalPages > 1 && (
        <div className='flexCenter flex-wrap gap-2 sm:gap-4 mt-14'>
          <button 
            disabled={currPage === 1} 
            onClick={() => setCurrPage(prev => prev - 1)} 
            className={`${currPage === 1 && "opacity-50 cursor-not-allowed"} btn-dark !py-1 !px-3`}
          >
            Previous
          </button>
          {Array.from({length: totalPages}, (_, index) => (
            <button 
              key={index + 1} 
              onClick={() => setCurrPage(index + 1)} 
              className={`${currPage === index + 1 && "bg-secondary !text-white"} btn-light !py-1 !px-3`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            disabled={currPage === totalPages} 
            onClick={() => setCurrPage(prev => prev + 1)} 
            className={`${currPage === totalPages && "opacity-50 cursor-not-allowed"} btn-white bg-tertiary !py-1 !px-3`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}

export default Shop