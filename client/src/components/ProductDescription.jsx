import React, { useState } from 'react'

const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className='mt-14 ring-1 ring-slate-900/10 rounded-lg'>
            {/* Tabs */}
            <div className='flex gap-3'>
                <button
                    className={`medium-14 p-3 w-32 ${activeTab === "overview" ? "border-b-2 border-secondary" : ""}`}
                    onClick={() => setActiveTab("overview")}
                >
                    Overview
                </button>
                <button
                    className={`medium-14 p-3 w-32 ${activeTab === "author" ? "border-b-2 border-secondary" : ""}`}
                    onClick={() => setActiveTab("author")}
                >
                    Author Info
                </button>
            </div>

            <hr className='h-[1px] w-full border-gray-500/30' />

            {/* Tab Content */}
            <div className='flex flex-col gap-3 p-3'>
                {activeTab === "overview" && (
                    <div>
                        <h5 className='h5'>Book Summary</h5>
                        <p className='text-sm'>
                            This book offers an engaging story that blends rich characters, 
                            thought-provoking themes, and an immersive narrative style. 
                            Perfect for readers who enjoy timeless classics and modern storytelling alike.
                        </p>
                        <p>
                            Whether you're reading for leisure, study, or inspiration, this edition 
                            provides insightful content and high-quality printing for a smooth 
                            reading experience.
                        </p>
                        <h5 className='h5 mt-4'>Key Highlights</h5>
                        <ul className='list-disc pl-5 text-sm flex flex-col gap-1'>
                            <li className='text-gray-600'>Well-researched content with engaging storytelling.</li>
                            <li className='text-gray-600'>Printed on high-quality paper for durability.</li>
                            <li className='text-gray-600'>Available in multiple formats (hardcover, paperback, and eBook).</li>
                            <li className='text-gray-600'>Perfect for students, collectors, and casual readers.</li>
                        </ul>
                    </div>
                )}

                {activeTab === "author" && (
                    <div>
                        <h5 className='h5'>About the Author</h5>
                        <p className='text-sm'>
                            The author is a renowned writer known for their ability to blend 
                            storytelling with real-world insights. With several bestsellers 
                            and literary awards, their works continue to inspire and captivate 
                            readers worldwide.
                        </p>
                        <p>
                            Their writing style is deeply immersive, making every book not just 
                            a story but an experience. This particular work reflects years of 
                            research, passion, and creativity.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDescription


// import React from 'react'

// const ProductDescription = () => {
//     return (
//         <div className='mt-14 ring-1 ring-slate-900/10 rounded-lg'>
//             <div className='flex gap-3'>
//                 <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Overview</button>
//                 <button className='medium-14 p-3 w-32'>Author Info</button>
//                 <button className='medium-14 p-3 w-32'>Reviews</button>
//             </div>
//             <hr className='h-[1px] w-full border-gray-500/30' />
//             <div className='flex flex-col gap-3 p-3'>
//                 <div>
//                     <h5 className='h5'>Book Summary</h5>
//                     <p className='text-sm'>
//                         This book offers an engaging story that blends rich characters, 
//                         thought-provoking themes, and an immersive narrative style. Perfect 
//                         for readers who enjoy timeless classics and modern storytelling alike.
//                     </p>
//                     <p>
//                         Whether you're reading for leisure, study, or inspiration, this edition 
//                         provides insightful content and high-quality printing for a smooth 
//                         reading experience.
//                     </p>
//                 </div>
//                 <div>
//                     <h5 className='h5'>Key Highlights</h5>
//                     <ul className='list-disc pl-5 text-sm flex flex-col gap-1'>
//                         <li className='text-gray-600'>Well-researched content with engaging storytelling.</li>
//                         <li className='text-gray-600'>Printed on high-quality paper for durability.</li>
//                         <li className='text-gray-600'>Available in multiple formats (hardcover, paperback, and eBook).</li>
//                         <li className='text-gray-600'>Perfect for students, collectors, and casual readers.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductDescription
