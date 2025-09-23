import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay } from 'swiper/modules';
import { bgHero, bgImg } from '../assets/assets';
import Item from './Item';
import { ShopContext } from '../context/ShopContext';
import { IoSearch } from 'react-icons/io5';



const Hero = () => {

    const [popularBooks, setPopularBokks] = useState([]);
    const { books } = useContext(ShopContext);

    // getting popular books
    useEffect(() => {
        const data = books.filter((item) => item.popular)
        setPopularBokks(data.slice(0, 6))
    }, [books]);


    return (
        <section className='max-padd-container flex gap-6 h-[630px] mt-16'>
            <div className='flex flex-[5] bg-cover bg-center bg-no-repeat rounded-2xl' style={{ backgroundImage: `url(${bgImg})` }}>
                {/* Left side */}
                <div className='max-padd-container flex flex-col h-full justify-center pt-6'>
                    <h3 className='bold-24 text-secondary font-thin'>Explore Books You'll Love</h3>
                    {/* <h1 className='h-1 max-w-[699px] !font-[800] leading-none'>Find Your Next Book</h1> */}
                    <h2 className='capitalize h2 tracking-wider'>Up to <span>30% off This Session</span></h2>
                    <p className='max-w-xs pt-6 text-[14px]'>
                        Discover the joy of reading with Our carefully curated collection of books .Whether you're searching for the latest bestsellers,timeless classics or hidden gems , we've got something for every reader .Enjoy fast delivery ,Secure checkout, and unbatable prices - your next great read is just a  click away!
                    </p>
                    {/* Button */}
                    <div className='flex mt-4 '>
                        <div className='bg-white text-[14px] font-medium pl-6 rounded-full flexCenter gap-x-6 group'>
                            <input type="text" placeholder='Search book....' className='bg-transparent  text-sm outline-none  placeholder:text-gray-400' />
                            <IoSearch className='bg-secondary text-white rounded-full  h-10 w-10 p-3 m-[3px] border border-white hover:text-black transition-all duration-500 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='hidden lg:block flex-[2] bg-primary rounded-2xl bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgHero})` }}>
                <div className='max-w-sm pt-28'>
                    {/* container */}
                    <div>
                        {
                            <Swiper
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    355: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    }
                                }}
                                modules={[Autoplay]}
                                className="min-h-[399px] max-w-64"
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero


// import React from 'react'
// import { IoMdArrowRoundForward } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import BannerCard from './BannerCard';

// const Hero = () => {
//     return (
//         <div className='max-padd-container pl-8 px-4 lg:px-24 flex items-center mt-16'>
//             <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-25'>
//                 {/* left Side */}
//                 <div className='md:w-1/2 space-y-8'>
//                     <h3 className='bold-24 text-secondary font-thin'>Explore Books You'll Love</h3>
//                     <h2 className='capitalize h2 tracking-wider '>Up to 30% off This Session</h2>
//                     <p className='max-w-xl text-[14px]'>
//                         Discover the joy of reading with Our carefully curated collection of books .Whether you're searching for the latest bestsellers,timeless classics or hidden gems , we've got something for every reader .Enjoy fast delivery ,Secure checkout, and unbatable prices - your next great read is just a  click away!
//                     </p>
//                     <div className='flex mt-4'>
//                         <Link to={'/shop'} className='bg-primary text-[14px] font-medium pl-6 rounded-full flexCenter gap-x-6 '>Check our latest books
//                             <IoMdArrowRoundForward className='bg-secondary text-white rounded-full  h-10 w-10 p-3 m-[3px] border border-white group-hover:text-black transition-all duration-500' />
//                         </Link>
//                     </div>
//                 </div>
//                 <div>
//                     <BannerCard/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero