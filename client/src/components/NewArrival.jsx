import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

// import required modules
import { Autoplay } from 'swiper/modules';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';


const NewArrival = () => {

    const [newArrival, setNewArrival] = useState([]);
    const { books } = useContext(ShopContext);

    useEffect(() => {
        setNewArrival(books.slice(0, 6))
    }, [books])
    return (
        <section className='max-padd-container mt-5'>
            <Title title1={"New"} title2={"Arrivals"} title1Styles={"pb-10"} para={"Check out newest books arriving weekly with fresh ideas, existing pltos, and vibrant voices"} />
            {/* container */}
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
                        newArrival.map((book) => (
                            <SwiperSlide key={book._id}>
                                <Item book={book} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }

        </section>
    )
}

export default NewArrival