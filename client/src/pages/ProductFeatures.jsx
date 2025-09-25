// import React from 'react'
// import { GiReturnArrow } from "react-icons/gi";
// import { PiAirplaneTiltBold } from "react-icons/pi";
// import { RiSecurePaymentFill } from "react-icons/ri";





// const ProductFeatures = () => {
//   return (
//     <div className='mt-12 bg-primary rounded-xl'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
//             <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
//                 <div className='text-xl'><GiReturnArrow className='mb-3 text-yellow-500'/></div>
//                 <div>
//                     <h4 className='h4 capitalize'>Easy Return</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iusto deleniti voluptas eum suscipit est ut quas dolores? Eligendi veniam tenetur voluptas excepturi quae quas rem ad ducimus officia nisi.</p>
//                 </div>
//             </div>
//             <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
//                 <div className='text-3xl'><PiAirplaneTiltBold className='mb-3 text-red-500'/></div>
//                 <div>
//                     <h4 className='h4 capitalize'>Fast Delivery</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iusto deleniti voluptas eum suscipit est ut quas dolores? Eligendi veniam tenetur voluptas excepturi quae quas rem ad ducimus officia nisi.</p>
//                 </div>
//             </div>
//             <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
//                 <div className='text-3xl'><RiSecurePaymentFill className='mb-3 text-blue-500'/></div>
//                 <div>
//                     <h4 className='h4 capitalize'>Secure Payment</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iusto deleniti voluptas eum suscipit est ut quas dolores? Eligendi veniam tenetur voluptas excepturi quae quas rem ad ducimus officia nisi.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ProductFeatures

import React from 'react'
import { GiReturnArrow } from "react-icons/gi";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

const ProductFeatures = () => {
  return (
    <div className='mt-12 bg-primary rounded-xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
        
        {/* Easy Exchange */}
        <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
          <div className='text-xl'>
            <GiReturnArrow className='mb-3 text-yellow-500'/>
          </div>
          <div>
            <h4 className='h4 capitalize'>Easy Exchange</h4>
            <p className='text-sm text-gray-700'>
              Ordered the wrong edition or book? No worries — we offer simple 
              exchange options so you always get the right copy for your needs.
            </p>
          </div>
        </div>

        {/* Fast Shipping */}
        <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
          <div className='text-3xl'>
            <PiAirplaneTiltBold className='mb-3 text-red-500'/>
          </div>
          <div>
            <h4 className='h4 capitalize'>Fast Shipping</h4>
            <p className='text-sm text-gray-700'>
              Get your favorite titles delivered quickly and safely, whether 
              you’re ordering a single book or building your home library.
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
          <div className='text-3xl'>
            <RiSecurePaymentFill className='mb-3 text-blue-500'/>
          </div>
          <div>
            <h4 className='h4 capitalize'>Secure Checkout</h4>
            <p className='text-sm text-gray-700'>
              Shop with confidence using encrypted transactions and trusted 
              payment gateways for a safe and hassle-free experience.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductFeatures
