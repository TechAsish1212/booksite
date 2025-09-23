import React from 'react'
import Title from './Title'
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { TiLocationArrow } from "react-icons/ti";
import { TbAdjustmentsSearch } from "react-icons/tb";

const Achievments = () => {

    const statistics = [
        { label: "Happy Clients", vlaue: 15 },
        { label: "Book Stock", vlaue: 20 },
        { label: "Total Sales", vlaue: 10 },
    ]

    return (
        <section className='mx-auto max-w-[1440px]'>
            {/* container */}
            <div className='flex flex-col xl:flex-row gap-12'>
                {/* left side */}
                <div className='flex-[2] flex justify-center flex-col bg-gradient-to-l from-tertiary/40 to-white px-6 lg:px-12 py-16 '>
                    <h2 className='h2'>Our Journey So Far</h2>
                    <p className='py-5 max-w-[47rem]'>
                        From a small idea to a growing libary, our journey has fueled by a love for stories, knowledge, and the joy od sharing books with readers from all walks of life.
                    </p>
                    {/* statistics  */}
                    <div className='flex flex-wrap gap-4'>
                        {statistics.map((sat, ind) => (
                            <div key={ind} className='p-4 rounded-lg '>
                                <div className='flex items-center gap-1 '>
                                    <h3 className='text-5xl font-sans'>{sat.vlaue}</h3>
                                    <h4 className='regular-32'>k+</h4>
                                </div>
                                <p className='capitalize pt-3'>{sat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* right */}
                <div className='flex-1 relative max-sm:pl-8 flex items-center xl:justify-center pt-5'>
                    <div className='flex-col'>
                        <Title title1={"About"} title2={"Us"} title1Styles={"pb-10"} paraStyles={"hidden"} />
                        <div className='flex flex-col items-start'>
                            <div className='flexCenter gap-3 mb-3'>
                                <RiSecurePaymentLine className='text-xl ' />
                                <div>
                                    <h5 className='h5'>Fast & Secure </h5>
                                    <p>Optimized Performance</p>
                                </div>
                            </div>
                            <div className='flexCenter gap-3 mb-3'>
                                <TbAdjustmentsSearch className='text-xl ' />
                                <div>
                                    <h5 className='h5'>Advance Filtering</h5>
                                    <p>Find items quickly</p>
                                </div>
                            </div>
                            <div className='flexCenter gap-3 mb-3'>
                                <FaUsers className='text-xl ' />
                                <div>
                                    <h5 className='h5'>User Reviews</h5>
                                    <p>Ratings & Feedback</p>
                                </div>
                            </div>
                            <div className='flexCenter gap-3 mb-3'>
                                <TiLocationArrow className='text-2xl ' />
                                <div>
                                    <h5 className='h5'>Order Tracking</h5>
                                    <p>Live Order Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievments