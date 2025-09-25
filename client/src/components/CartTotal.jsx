import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { dummyAddress } from '../assets/assets';

const CartTotal = () => {
    const { navigate, currency, cartItems, updateQuantity, books, method, setMthod, getCartAmount, getCartCount, delivery_charges, user, setCartItems } = useContext(ShopContext);

    const [addresses, setAddresses] = useState(dummyAddress);
    const [selectedAddress, setSlectedAddress] = useState(dummyAddress[0]);
    const [showAddress, setShowAddress] = useState(false)

    return (
        <div>
            <h3 className='bold-22'>Order Details <span className='bold-14 text-secondary'>({getCartCount()}) Items</span></h3>
            <hr className='border-gray-300 my-5' />
            {/* payment Gateway */}
            <div>
                <div>
                    <h4 className='h4 '>Where to ship your order ?</h4>
                    <div>
                        <p>{selectedAddress ? `${selectedAddress.street},${selectedAddress.city},${selectedAddress.zipcode},${selectedAddress.state},${selectedAddress.country}` : "No Address Found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className=''>Change</button>
                        {
                            showAddress && (
                                <div>
                                    {addresses.map((add, ind) => (
                                        <p key={ind} onClick={() => { setSlectedAddress(add); setShowAddress(false) }} className=''>
                                            {add.street},{add.city},{add.zipcode},{add.state}, {" "}, {add.country}
                                        </p>
                                    ))}
                                    <p onClick={() => navigate('/address-form')} className=''>Add Address</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr className='border-gray-300 my-5' />
                <div>
                    <h4 className='h4'>Payment Method</h4>
                    <div>
                        <div>Cash on Delivery</div>
                        <div>Stripe</div>
                    </div>
                </div>
                <hr className='border-gray-300 my-5' />
            </div>
            <div>
                <div>
                    <h5 className='h5'>price</h5>
                </div>
            </div>
        </div>
    )
}

export default CartTotal