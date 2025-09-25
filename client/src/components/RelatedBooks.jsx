import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

// import required modules
import { Autoplay } from 'swiper/modules';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

const RelatedBooks = ({ book, id }) => {

    const [relatedBooks, setRelatedBooks] = useState([]);
    const { books } = useContext(ShopContext);

    useEffect(() => {
        if (books.length > 0) {
            let booksCopy = books.slice();
            booksCopy = booksCopy.filter((item) => item.category === book.category && id !== item._id);
            setRelatedBooks(booksCopy.slice(0, 6));
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [books,book,id])

    return (
        <section className='mt-5'>
            <Title title1={"Related"} title2={"Books"} title1Styles={"pb-10"} />
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
                        relatedBooks.map((book) => (
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

export default RelatedBooks

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// // import required modules
// import { Autoplay } from 'swiper/modules';
// import Item from './Item';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// const RelatedBooks = ({ book, id }) => {
//     const [relatedBooks, setRelatedBooks] = useState([]);
//     const { books } = useContext(ShopContext);

//     useEffect(() => {
//         if (books.length > 0 && book) {
//             let booksCopy = books.slice();
//             booksCopy = booksCopy.filter(
//                 (item) => item.category === book.category && id !== item._id
//             );
//             setRelatedBooks(booksCopy.slice(0, 6));
//             window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//     }, [books, book, id]); // ✅ now runs when book or id changes

//     return (
//         <section className='mt-5'>
//             <Title title1={"Related"} title2={"Books"} title1Styles={"pb-10"} />
            
//             <Swiper
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                 }}
//                 breakpoints={{
//                     355: { slidesPerView: 2, spaceBetween: 20 },
//                     600: { slidesPerView: 3, spaceBetween: 20 },
//                     900: { slidesPerView: 4, spaceBetween: 20 },
//                     1200: { slidesPerView: 5, spaceBetween: 20 },
//                 }}
//                 modules={[Autoplay]}
//                 className="min-h-[333px]"
//             >
//                 {relatedBooks.map((book) => (
//                     <SwiperSlide key={book._id}>
//                         <Item book={book} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     )
// }

// export default RelatedBooks
