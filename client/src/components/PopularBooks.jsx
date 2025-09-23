import React, { useContext, useEffect, useState } from 'react'

// import required modules
import { Autoplay } from 'swiper/modules';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const PopularBooks = () => {

  const [popularBooks, setPopularBokks] = useState([]);
  const { books } = useContext(ShopContext);

  // getting popular books
  useEffect(() => {
    const data = books.filter((item) => item.popular)
    setPopularBokks(data.slice(0, 6))
  }, [books]);

  return (
    <section className='max-padd-container mt-5'>
      <Title title1={"Popular"} title2={"Books"} title1Styles={"pb-10"} para={"Explore our top selling books loved for their poweful stories, creative writin, and lasting impact"} />

      {
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            355: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20
            },
          }}
          modules={[Autoplay]}
          className="min-h-[333px]"
        >
          {
            popularBooks.map((book) => (
              <SwiperSlide key={book._id}>
                <Item book={book} fromHero={true} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
    </section>
  )
}

export default PopularBooks